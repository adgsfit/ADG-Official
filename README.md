# ADG — AI Developers Group, SFIT

> **The official website of the AI Developers Group (ADG)**, the student-run AI & ML committee of the Department of Artificial Intelligence and Machine Learning at **St. Francis Institute of Technology, Mumbai**.

[![Netlify Status](https://img.shields.io/badge/deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://app.netlify.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Live Site](#live-site)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Features](#pages--features)
- [Design System](#design-system)
- [Data Architecture](#data-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Team](#team)
- [Contact](#contact)

---

## About the Project

ADG (AI Developers Group) is the student-led AI/ML committee of the AIML Department at SFIT. This repository is the **full source code** for the official ADG website — built entirely by the committee's own Webmaster domain as a flagship internal project.

The site serves as the primary public-facing presence for ADG: communicating what the committee is, what it does, who is on the team, and how to get involved. It also functions as a live demonstration that the committee **ships real products**, not just slides.

### Key highlights

- **Hands-on, real-world project** — designed, built and maintained by SFIT students.
- **Content-driven** — all page content (events, team, mission, gallery) is managed through clean data files in `src/data/`, making updates quick and code-free.
- **Dual theme support** — a *Midnight* (dark) and a *Daylight* (light) colour scheme with zero flash on load, persisted via `localStorage`.
- **SPA with deep-link support** — React Router handles all routing; Netlify redirects ensure clean deep links work in production.
- **Accessible** — skip-to-content link, reduced-motion respect, semantic HTML throughout.

---

## Live Site

> The deployed site is hosted on **Netlify** and continuously deployed from the `main` branch.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | [React](https://react.dev) | 18.3 |
| Build Tool | [Vite](https://vitejs.dev) | 5.4 |
| Routing | [React Router DOM](https://reactrouter.com) | 6.26 |
| Styling | Vanilla CSS (custom design system) | — |
| Typography | Google Fonts — *Black Ops One*, *Instrument Sans*, *IBM Plex Mono* | — |
| Deployment | [Netlify](https://www.netlify.com) | — |
| Package Manager | npm | — |

No CSS framework, no UI component library. Every visual element is hand-crafted in `src/styles.css`.

---

## Project Structure

```
ADG/
├── public/
│   └── assets/            # Static assets served at root (favicon, badge)
├── src/
│   ├── assets/            # Bundled assets (event posters, gallery photos)
│   │   ├── events/        # Event poster images (referenced by data/events.js)
│   │   └── gallery/       # Team and event group photos
│   ├── components/        # Reusable UI components
│   │   ├── Avatar.jsx         # Initials-based member avatar
│   │   ├── CommitteeCard.jsx  # Card used on the Team page
│   │   ├── Footer.jsx         # Site-wide footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Lightbox.jsx       # Full-screen image viewer for gallery
│   │   ├── Modal.jsx          # Generic modal/drawer overlay
│   │   ├── SocialIcon.jsx     # Platform-specific social media icon
│   │   ├── SocialLinks.jsx    # Row of social link buttons
│   │   ├── ThemePicker.jsx    # Midnight / Daylight theme toggle
│   │   └── Toast.jsx          # Notification toast system + provider
│   ├── data/              # All site content — edit here, not in JSX
│   │   ├── about.js           # USPs and target stats for About page
│   │   ├── events.js          # Events list, filters, semesters, principles
│   │   ├── gallery.js         # Album/photo configuration for Gallery page
│   │   ├── join.js            # Membership tiers, form fields, Google Form URL
│   │   ├── linkedin.js        # Known LinkedIn URLs keyed by member name
│   │   ├── mission.js         # Vision, mission statements, and objectives
│   │   ├── navigation.js      # Nav links, marquee domains, terminal lines
│   │   ├── site.js            # Global identity (name, college, email, repo)
│   │   ├── socials.js         # Social platform links (email, IG, GitHub, etc.)
│   │   └── team.js            # Team hierarchy, domain members, role bios
│   ├── pages/             # One file per route
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Join.jsx
│   │   ├── Mission.jsx
│   │   ├── NotFound.jsx
│   │   └── Team.jsx
│   ├── utils/             # Shared helper utilities
│   │   ├── hooks.js           # Custom React hooks
│   │   ├── photos.js          # Photo URL resolution helpers
│   │   ├── posters.js         # Event poster URL resolution helpers
│   │   └── text.js            # Text formatting utilities
│   ├── App.jsx            # Root component — routing + scroll/title effects
│   ├── main.jsx           # React entry point, providers tree
│   ├── styles.css         # Complete design system and all component styles
│   └── theme.jsx          # ThemeContext, ThemeProvider, useTheme hook
├── index.html             # HTML shell — theme flash prevention, fonts, SEO meta
├── vite.config.js         # Vite configuration
├── netlify.toml           # Netlify build settings + SPA redirect rule
├── package.json
└── .gitignore
```

---

## Pages & Features

### `/ · Home`
The landing experience. Includes a hero section with animated terminal lines, a scrolling marquee of AI/ML domains ADG works in, and quick-access programme links.

### `/about · About`
Communicates what ADG is and what makes it different. Three core USPs are presented alongside key targets for the academic year (workshops, hackathon, seminars, domain teams).

### `/mission · Mission`
The department's formal **Vision**, three **Mission** statements, and four operational **Objectives** — drawn directly from the AIML department charter.

### `/events · Events`
Full event calendar for AY 2026–27, split by semester. Supports **filter tabs** (Workshops / Hackathon / Seminars / Games / All). Each event card expands into a modal with full details, meta information, and key takeaways.

**Events this term:**

| # | Event | Type | Semester |
|---|---|---|---|
| 1 | Mosaic: Game of Deception | GAME | Sem 1 |
| 2 | AI in Cybersecurity Workshop | WORKSHOP | Sem 1 |
| 3 | Workshop 01–03 (Industry-led series) | WORKSHOP | Sem 2 |
| 4 | ADG Hackathon (Flagship) | HACKATHON | Sem 2 |
| 5 | Seminar 01–02 | SEMINAR | Sem 2 |

### `/team · Team`
Hierarchical org-chart of the full committee — Faculty (HOD + Coordinators), Core (President, VP, Secretary, Treasurer), and 8 functional **domains**: Technical, Public Relations, Webmaster, Marketing, Logistics, Multimedia, Graphics, and Creatives. Each member card links to their LinkedIn, GitHub, and Instagram profiles.

### `/gallery · Gallery`
Two albums:
- **Group photos** — one slot per team, auto-matched from `src/assets/gallery/` by filename convention (e.g., `01-Full-Committee.jpg`).
- **Upcoming events** — placeholder slots for each event that fill in after the event happens.

A full-screen **Lightbox** component handles keyboard-navigable image viewing.

### `/join · Join`
Explains the three membership tiers (Member → Contributor → Core), lists what the intake form asks for, and links directly to the Google Form. "Nothing yet" is explicitly stated as a valid answer.

### `/* · 404`
A friendly Not Found page for any unmatched routes.

---

## Design System

The entire design lives in `src/styles.css`. It is structured as:

- **CSS custom properties** (`--bg`, `--fg`, `--accent`, etc.) — one set per `[data-theme]` block so the entire colour system swaps with a single attribute change.
- **Two themes:**
  - `midnight` — dark navy background (`#0c1426`), amber accent (`#ffb547`)
  - `paper` (Daylight) — off-white background (`#eef1f7`), blue accent (`#2748d8`)
- **Typography** — *Instrument Sans* for body text, *Black Ops One* for display/hero headings, *IBM Plex Mono* for code snippets and terminal lines.
- **No `!important`, no inline styles** — all specificity is handled through the class hierarchy.

### Theme switching — zero flash

The `<head>` in `index.html` runs an inline script *before* first paint that reads `localStorage` and sets `data-theme` on `<html>`. This prevents any flash of the wrong theme on load.

---

## Data Architecture

All content is kept in **plain JavaScript files** inside `src/data/`. There is no CMS, no database — the whole site is statically deployable. Updating content means editing one of these files:

| File | Controls |
|---|---|
| `site.js` | Name, college, email, faculty coordinator |
| `navigation.js` | Nav links, marquee domains, terminal quips |
| `events.js` | Every event card, filter categories, semester groupings |
| `team.js` | All member names, roles, and domain hierarchy |
| `mission.js` | Vision quote, mission statements, objectives |
| `about.js` | USP cards, stat targets |
| `gallery.js` | Photo album structure (photos themselves go in `src/assets/gallery/`) |
| `join.js` | Pipeline tiers, form fields, Google Form URL |
| `socials.js` | All external social / contact links |
| `linkedin.js` | Lookup table: member name → LinkedIn profile URL |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/adgsfit/ADG-Official.git
cd ADG-Official

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Vite starts a development server at `http://localhost:5173` with hot module replacement.

### Building for Production

```bash
npm run build
```

The production bundle is output to `dist/`. Preview the built bundle locally with:

```bash
npm run preview
```

---

## Deployment

The site is deployed on **Netlify** with continuous deployment from the `main` branch.

Configuration lives in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 200
```

The redirect rule ensures that React Router's client-side routes (e.g., `/team`, `/events`) work correctly when accessed directly or after a hard refresh — Netlify serves `index.html` for all paths and lets the router take over.

---

## Contributing

This project is maintained by the **Webmaster domain** of ADG SFIT. If you are a committee member and want to contribute:

1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes.** For content updates (events, team members, etc.), edit the relevant file in `src/data/` — no React knowledge required.

3. **Test locally** with `npm run dev` before opening a PR.

4. **Open a Pull Request** against `main` with a clear description of what changed and why.

### Adding a new event

Edit `src/data/events.js` — add an object to the `events` array following the existing structure. If there is a poster, drop the image file into `src/assets/events/` and reference it by filename (without extension) in the `poster` field.

### Adding a gallery photo

Drop the image into `src/assets/gallery/`. Name it using the convention `NN-team-name.jpg` (e.g., `03-Technical-Team.jpg`). The gallery page will auto-detect and slot it into the correct team card.

### Updating team members

Edit the `lvl1`, `lvl2`, and `domains` arrays in `src/data/team.js`. If a member has a known LinkedIn URL, add an entry to `src/data/linkedin.js`.

---

## Team

**AY 2026–27 · Webmaster Domain**

| Role | Name |
|---|---|
| Head | Anish Desai |
| Joint Head | Riddhi Patil |
| Executive | Joel Almeida |
| Executive | Roshan Mathew |
| Executive | Ansel Almeida |

**Faculty**

| Role | Name |
|---|---|
| Head of Department | Dr. Joanne Gomes |
| Faculty Coordinator | Ms. Priyanka Patil |
| Faculty Co-Coordinator | Mr. Amol Lachake |

---

## Contact

| Channel | Link |
|---|---|
| Email | [sfit.aidg@gmail.com](mailto:sfit.aidg@gmail.com) |
| Instagram | [@sfit.adg](https://www.instagram.com/sfit.adg) |
| LinkedIn | [AI Developers Group](https://www.linkedin.com/company/ai-developers-group/posts/) |
| GitHub | [adgsfit](https://github.com/adgsfit) |
| X / Twitter | [@adg_sfit](https://x.com/adg_sfit) |

**Address**

Department of AIML
St. Francis Institute of Technology
Mt. Poinsur, S.V.P. Road, Borivli (W)
Mumbai 400103

---

<p align="center">Built and maintained by ADG SFIT · Webmaster Domain · AY 2026–27</p>
