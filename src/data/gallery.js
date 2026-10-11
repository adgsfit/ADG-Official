import { events } from './events.js';
import { domains } from './team.js';

const YEAR = 'ADG · 2026–27';

// ── Group photos: one slot per team, filled automatically from src/assets/gallery ──
const files = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// "03-Technical-Team.JPG" -> "technical"  (number, extension and "-team" are ignored)
const normalize = (path) =>
  slug(path.split('/').pop().replace(/\.[^.]+$/, ''))
    .replace(/^\d+-?/, '')
    .replace(/-team$/, '');

const titleFromFile = (path) => {
  const text = normalize(path).replace(/-/g, ' ');
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : 'Group photo';
};

// File name (without number/extension) that fills each slot. "alias" are extra accepted names.
const slots = [
  { key: 'full-committee', alias: ['full', 'everyone', 'all'], title: 'Full committee' },
  { key: 'hod-and-coordinators', alias: ['hod', 'faculty', 'coordinators'], title: 'HOD and coordinators' },
  { key: 'core-committee', alias: ['core'], title: 'Core committee' },
  ...domains.map((d) => ({ key: slug(d.name), alias: [], title: `${d.name} team` }))
];

const entries = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({ path, src, name: normalize(path) }));

const used = new Set();
const group = slots.map((slot) => {
  const names = [slot.key, ...slot.alias];
  const hit = entries.find((e) => !used.has(e.path) && names.includes(e.name));
  if (hit) {
    used.add(hit.path);
    return { title: slot.title, caption: YEAR, src: hit.src };
  }
  return {
    title: slot.title,
    caption: YEAR,
    pending: 'Photo to come',
    label: `${slot.title} photo to be added`
  };
});

// Any photo whose name matches no team is still shown, after the team slots.
for (const e of entries) {
  if (!used.has(e.path)) group.push({ title: titleFromFile(e.path), caption: YEAR, src: e.src });
}

const filled = group.filter((p) => p.src).length;
const open = group.length - filled;

// ── Upcoming events: one slot per event on the Events page, plus spare slots ─
const MIN_UPCOMING_SLOTS = 9;

const upcomingSlots = events.map((e) => ({
  title: e.title,
  caption: YEAR,
  pending: 'Coming soon',
  label: 'Photos will be added after the event'
}));
while (upcomingSlots.length < MIN_UPCOMING_SLOTS) {
  upcomingSlots.push({
    title: `Future event ${String(upcomingSlots.length - events.length + 1).padStart(2, '0')}`,
    caption: YEAR,
    pending: 'Coming soon',
    label: 'To be announced'
  });
}

export const albums = [
  {
    id: 'group',
    title: 'Group photos',
    meta: 'ONE PHOTO PER TEAM · 2026–27',
    count: filled ? `${filled} PHOTOS · ${open} SLOTS OPEN` : `${group.length} SLOTS`,
    photos: group
  },
  {
    id: 'upcoming',
    title: 'Upcoming events',
    meta: 'NO EVENTS YET · PHOTOS WILL APPEAR HERE',
    count: `${upcomingSlots.length} SLOTS`,
    layout: 'even',
    photos: upcomingSlots
  }
];