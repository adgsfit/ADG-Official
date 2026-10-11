import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommitteeCard from "../components/CommitteeCard.jsx";
import { useToast } from "../components/Toast.jsx";
import { badgeQuips, marqueeDomains, terminalLines } from "../data/navigation.js";
import { prefersReduced } from "../utils/hooks.js";
<<<<<<< HEAD
import { site } from "../data/site.js";
import deceptionPoster from "../assets/home/deception-home-poster.jpg";
=======
>>>>>>> a1769df8d4620e399946eeb4f20636286717c739

const DIRECTORY = [
  {
    to: "/about",
    name: "About",
    title: "A committee is a habit, not a calendar.",
    line: "Our core USPs, hands-on philosophy, and Year 1 targets measured at close.",
  },
  {
    to: "/mission",
    name: "Mission",
    title: "Vision, mission and objectives",
    line: "Nurturing transformative intelligence in AI/ML through project competency and ethics.",
  },
  {
    to: "/events",
    name: "Events",
    title: "Two semesters: workshops, games and a hackathon",
    line: "Specialist-led sessions, the flagship hackathon, and published seminar notes.",
  },
  {
    to: "/team",
    name: "Team",
    title: "Ten levels: faculty, core and domains",
    line: "Meet the HOD and coordinators, core officers and the 8 domain teams.",
  },
  {
    to: "/gallery",
    name: "Gallery",
    title: "Proof of work, not posters",
    line: "Committee kickoffs, lab shots, hands-on moments and demos.",
  },
  {
    to: "/join",
    name: "Join",
    title: "Member, contributor, core",
    line: "One 2-minute form. Open to any branch and year. No prerequisites, no fee.",
  },
];

// Types the repo's terminal lines one character at a time.
function Terminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(terminalLines[0].length);

  useEffect(() => {
    if (prefersReduced()) return undefined;
    let timer;
    let l = 0;
    let c = 0;
    const tick = () => {
      const full = terminalLines[l];
      if (c < full.length) {
        c += 1;
        setChars(c);
        timer = setTimeout(tick, 70);
      } else {
        timer = setTimeout(() => {
          l = (l + 1) % terminalLines.length;
          setLine(l);
          c = 0;
          setChars(0);
          timer = setTimeout(tick, 240);
        }, 2100);
      }
    };
    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="terminal" aria-hidden="true">
      <span className="terminal-prompt">$</span>
      <span className="terminal-text">{terminalLines[line].slice(0, chars)}</span>
      <span className="cursor" />
    </p>
  );
}

export default function Home() {
  const toast = useToast();
  const [pokes, setPokes] = useState(0);

  const poke = () => {
    const n = pokes + 1;
    setPokes(n);
    toast(badgeQuips[(n - 1) % badgeQuips.length]);
  };

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>We ship beyond what the syllabus teaches.</h1>
            <Terminal />
            <p className="lede">
              ADG is the student-run AI and ML committee at SFIT. Lectures hand you the concept and the
              marks. We hand you the shipped version: a model trained, an app deployed, a project
              demoed to an actual room of actual people.
            </p>
            <div className="actions">
<<<<<<< HEAD
              <a className="btn btn-primary" href={site.registrationUrl} target="_blank" rel="noopener noreferrer">
                Register for Deception
              </a>
              <Link className="btn btn-ghost" to="/join">
=======
              <Link className="btn btn-primary" to="/join">
>>>>>>> a1769df8d4620e399946eeb4f20636286717c739
                Join the committee
              </Link>
              <Link className="btn btn-ghost" to="/events">
                See the events
              </Link>
            </div>

            <div className="hero-foot">
              <dl className="hero-stats">
                <div>
                  <dt>Teaching weeks</dt>
                  <dd>19</dd>
                </div>
                <div>
                  <dt>Events this term</dt>
                  <dd>6</dd>
                </div>
                <div>
                  <dt>Prerequisites</dt>
                  <dd>0</dd>
                </div>
              </dl>
              <div className="badge-wrap">
                <button type="button" className="badge-btn" onClick={poke} aria-label="ADG badge. Press it.">
                  <img
                    src="/assets/adg-badge.png"
                    alt=""
                    style={{ transform: `rotate(${pokes * 360}deg)` }}
                  />
                </button>
                <p>Click the badge. We dare you.</p>
              </div>
            </div>
          </div>
          <CommitteeCard />
        </div>
      </section>

<<<<<<< HEAD
      {/* Overriding the default section top padding/margin to pull the layout up */}
      <section className="section home-feature" aria-labelledby="deception-title" style={{ paddingTop: '2rem', marginTop: 0 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Centering the image in its grid track instead of flex-end to keep it balanced */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              className="home-poster-link"
              href={site.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Deception registration page"
            >
              <img
                className="home-poster"
                src={deceptionPoster}
                alt="Poster for Deception, ADG x Mosaic, 16 to 17 October 2026, Room No. 028, SFIT"
                loading="lazy"
                style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', borderRadius: '8px' }}
              />
            </a>
          </div>
          
          <div className="home-feature-copy">
            <p className="event-status">Registrations open</p>
            <h2 id="deception-title">Deception. Trust no one.</h2>
            <p className="lede">
              ADG x Mosaic present a game of deception. Complete tasks, watch closely, find the imposter and
              vote.
            </p>
            <p className="event-when">16–17 October 2026 · Room No. 028, SFIT</p>
            <div className="actions">
              <a className="btn btn-primary" href={site.registrationUrl} target="_blank" rel="noopener noreferrer">
                Register now
              </a>
              <Link className="btn btn-ghost" to="/events">
                View details
              </Link>
            </div>
          </div>

        </div>
      </section>

=======
>>>>>>> a1769df8d4620e399946eeb4f20636286717c739
      <section className="marquee" aria-label="What we work with">
        <div className="marquee-track">
          {[...marqueeDomains, ...marqueeDomains].map((d, i) => (
            <span key={i} aria-hidden={i >= marqueeDomains.length ? "true" : undefined}>
              {d}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Everything ADG, organised.</h2>
            <p>Pick a section to dive deeper.</p>
          </div>
          <ul className="run-list run-list--two" role="list">
            {DIRECTORY.map((d) => (
              <li key={d.to}>
                <Link to={d.to}>
                  <span className="run-title">{d.name}</span>
                  <span className="run-line">
                    <strong>{d.title}</strong>
                    {d.line}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a1769df8d4620e399946eeb4f20636286717c739
