# ADG — AI Developers Group

Official website for ADG, the AI/ML committee at SFIT (Department of AIML, St. Francis Institute of Technology).

Migrated to a modern, performant **React + Vite** architecture with **React Router**.

---

## Project Structure

```text
ADG/
├── public/
│   └── assets/
│       └── adg-badge.png
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   ├── EventModal.jsx
│   │   │   └── MemberModal.jsx
│   │   ├── Lightbox/
│   │   │   └── Lightbox.jsx
│   │   ├── ScrollToTop/
│   │   │   └── ScrollToTop.jsx
│   │   └── Toast/
│   │       └── Toast.jsx
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Mission/
│   │   │   └── Mission.jsx
│   │   ├── Events/
│   │   │   └── Events.jsx
│   │   ├── Team/
│   │   │   └── Team.jsx
│   │   ├── Gallery/
│   │   │   └── Gallery.jsx
│   │   └── Join/
│   │       └── Join.jsx
│   ├── data/
│   │   ├── navigation.js
│   │   ├── events.js
│   │   ├── team.js
│   │   ├── gallery.js
│   │   ├── about.js
│   │   ├── mission.js
│   │   └── join.js
│   ├── utils/
│   │   └── useEffects.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

---

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Live terminal typing console, interactive spinning badge easter egg with quip toasts, domain marquee & section directory |
| `/about` | About | Core philosophy, 3 USPs, Year 1 targets with animated counters |
| `/mission` | Mission | Vision quote, 3 core missions, and 4 departmental objectives |
| `/events` | Events | Term 1 workshops, flagship hackathon, category filters & interactive detail modal |
| `/team` | Team | 10-level organizational hierarchy (Faculty, Core, 8 Domains) with interactive level switcher and member profile modals |
| `/gallery` | Gallery | Photo archive & albums with full interactive lightbox viewer and keyboard navigation |
| `/join` | Join | 3-tier membership pipeline & Google Form registration details |

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the Vite local development server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Builds the optimized production assets into `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## Deployment (Netlify)

Configured in `netlify.toml` with single-page application redirects for direct routes:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
