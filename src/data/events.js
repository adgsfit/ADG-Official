export const eventFilters = [
  { key: 'All', label: 'EVERYTHING' },
  { key: 'WORKSHOP', label: 'WORKSHOP' },
  { key: 'GAME', label: 'GAME' },
  { key: 'HACKATHON', label: 'HACKATHON' },
  { key: 'SEMINAR', label: 'SEMINAR' }
];

// Each event belongs to a semester via its `sem` number (1 or 2). Edit the notes freely.
export const semesters = [
  { sem: 1, title: 'Semester 1', note: 'This semester · AY 2026–27' },
  { sem: 2, title: 'Semester 2', note: 'Up next · AY 2026–27' }
];

export const events = [
  {
    id: 'm1',
    sem: 1,
    tag: 'GAME',
    kind: 'GAME',
    status: 'PLANNED',
    title: 'Mosaic: Game of Deception',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Mosaic, our game of deception. Rules, rounds and team format will be shared closer to the date.',
    detail: 'Mosaic is ADG\'s game of deception, planned for Semester 1. The full rules, team format and schedule will be announced together with the date and venue.',
    meta: [
      { k: 'FORMAT', v: 'Game event' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A game night with the committee', 'A certificate of participation']
  },
  {
    id: 'c1',
    sem: 1,
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'PLANNED',
    title: 'AI in Cybersecurity Workshop',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'A hands-on workshop on how AI is used to defend, and to attack, in cybersecurity.',
    detail: 'A hands-on workshop on the role of AI in cybersecurity, planned for Semester 1. The speaker, tools and exact agenda will be announced together with the date and venue.',
    meta: [
      { k: 'CONDUCTED BY', v: 'To be announced' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'w1',
    sem: 2,
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 01',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Hands-on, laptops open, taken by an industry specialist. Topic being finalised — the format is not.',
    detail: 'First of three workshops this semester, conducted end-to-end by an industry specialist. The topic is being locked in; the format is fixed — you build along live and you leave with it running.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'w2',
    sem: 2,
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 02',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Second in the series — picks up where the first stops. Industry specialist, hands-on throughout.',
    detail: 'The second workshop builds on the first. Topic follows once the series is locked with the specialists conducting it.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'w3',
    sem: 2,
    tag: 'WORKSHOP',
    kind: 'WORKSHOP',
    status: 'TOPIC · TBA',
    title: 'Workshop 03',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'Closes the series — the most advanced of the three. Industry specialist, hands-on throughout.',
    detail: 'The final workshop of the series and the deepest. Topic to be announced with the rest of the series.',
    meta: [
      { k: 'CONDUCTED BY', v: 'Industry specialist' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A working build from the session', 'A certificate of participation']
  },
  {
    id: 'h1',
    sem: 2,
    tag: 'HACKATHON',
    kind: 'HACKATHON',
    status: 'FLAGSHIP',
    title: 'ADG Hackathon',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'The flagship. Teams, a live brief, and a working demo or it does not count.',
    detail: 'The one marquee event of the term. Teams build against a brief released at the start; judging weighs a working demo over a pretty deck. Dates, venue and team size will be announced.',
    meta: [
      { k: 'FORMAT', v: 'Team event' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['A shipped project under time pressure', 'A judged entry for your CV']
  },
  {
    id: 's1',
    sem: 2,
    tag: 'SEMINAR',
    kind: 'SEMINAR',
    status: 'PLANNED',
    title: 'Seminar 01',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'One speaker worth the hour — on how AI/ML actually gets built outside the classroom.',
    detail: 'A sit-down session with an industry or academic guest. Speaker and topic will be announced together with the date.',
    meta: [
      { k: 'FORMAT', v: 'Talk + Q&A' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['Notes published afterwards', 'Q&A time that is actually enough']
  },
  {
    id: 's2',
    sem: 2,
    tag: 'SEMINAR',
    kind: 'SEMINAR',
    status: 'TENTATIVE',
    title: 'Seminar 02',
    date: 'DATE NA · TIME NA · VENUE NA',
    blurb: 'A possible second seminar — pencilled in, honestly labelled.',
    detail: 'Held as tentative until the term calendar settles. If it runs: one good speaker, one focused hour, published notes.',
    meta: [
      { k: 'FORMAT', v: 'Talk + Q&A' },
      { k: 'DATE', v: 'NA' },
      { k: 'TIME', v: 'NA' },
      { k: 'VENUE', v: 'NA' }
    ],
    takeaways: ['Notes published afterwards', 'Q&A time that is actually enough']
  }
];

export const operatingPrinciples = [
  'Scheduled around the academic calendar — nothing inside mid-sems, practicals, festival breaks or end-sems.',
  'Every event closes with certificates, a published recording or notes, and a written report within a week.',
  'A syllabus document reviewed and signed off by faculty before the term begins.'
];