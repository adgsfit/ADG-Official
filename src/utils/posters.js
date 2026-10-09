// Finds an event poster in src/assets/events by name.
// poster: 'mosaic-poster' -> src/assets/events/mosaic-poster.png (also .jpg / .jpeg / .webp).
const files = import.meta.glob("../assets/events/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const bySlug = {};
for (const [path, url] of Object.entries(files)) {
  bySlug[path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase()] = url;
}

export const posterFor = (name) => (name ? bySlug[name.toLowerCase()] ?? null : null);
