export const albums = [
  {
    id: 'a2627',
    title: '2026–27',
    meta: 'ALBUM 01 · PHOTOS COMING',
    cover: 'ALBUM COVER — DROP THE BEST SHOT\nOF THE YEAR HERE',
    count: '8 SLOTS',
    photos: [
      { title: 'Kickoff', caption: 'ADG · 2026–27', label: 'DROP PHOTO 01 — COMMITTEE KICKOFF' },
      { title: 'Workshop 01', caption: 'ADG · 2026–27', label: 'DROP PHOTO 02 — WORKSHOP, LAB WIDE SHOT' },
      { title: 'Workshop 02', caption: 'ADG · 2026–27', label: 'DROP PHOTO 03 — HANDS ON KEYBOARDS' },
      { title: 'Workshop 03', caption: 'ADG · 2026–27', label: 'DROP PHOTO 04 — SPECIALIST MID-SESSION' },
      { title: 'Seminar', caption: 'ADG · 2026–27', label: 'DROP PHOTO 05 — SPEAKER AND AUDIENCE' },
      { title: 'Hackathon', caption: 'ADG · 2026–27', label: 'DROP PHOTO 06 — TEAMS BUILDING, NIGHT SHOT' },
      { title: 'Demos', caption: 'ADG · 2026–27', label: 'DROP PHOTO 07 — PROJECT DEMO ON SCREEN' },
      { title: 'The committee', caption: 'ADG · 2026–27', label: 'DROP PHOTO 08 — FULL TEAM GROUP SHOT' }
    ]
  }
];

export const galleryPhotos = albums[0].photos.map((p, i) => ({
  ...p,
  idx: i,
  num: '0' + (i + 1)
}));
