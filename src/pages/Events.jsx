import { useCallback, useState } from "react";
import Modal from "../components/Modal.jsx";
import { eventFilters, events, operatingPrinciples, semesters } from "../data/events.js";
import { orTba, sentence } from "../utils/text.js";

const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

const WHEN_KEYS = ["DATE", "TIME", "VENUE"];

function whenLine(e) {
  const known = e.meta.filter((m) => WHEN_KEYS.includes(m.k) && m.v.trim().toUpperCase() !== "NA");
  return known.length ? known.map((m) => m.v).join(", ") : "Date, time and venue to be announced";
}

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);

  const matches = (e) => filter === "All" || e.kind === filter;
  const current = events.find((e) => e.id === openId);

  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>{NUMBER_WORDS[events.length] ?? events.length} events. Zero filler.</h1>
          <p className="lede">
            We run hands-on workshops, games, one flagship hackathon where the demo is the judging, and
            sit-down seminars with people who build AI for a living. The year is split into two semesters.
          </p>
        </header>

        <div className="tabs" role="group" aria-label="Filter events">
          {eventFilters.map((f) => (
            <button key={f.key} type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.key === "All" ? "Everything" : sentence(f.label)}
            </button>
          ))}
        </div>

        {semesters.map((sm) => {
          const all = events.filter((e) => e.sem === sm.sem);
          const list = all.filter(matches);
          return (
            <section className="sem" key={sm.sem} aria-labelledby={`sem-${sm.sem}`}>
              <header className="sem-head">
                <h2 id={`sem-${sm.sem}`}>{sm.title}</h2>
                <p>
                  {sm.note} · {all.length} {all.length === 1 ? "event" : "events"}
                </p>
              </header>
              {list.length ? (
                <ul className="event-grid" role="list" key={filter}>
                  {list.map((e) => (
                    <li key={e.id} className={e.kind === "HACKATHON" ? "event-card event-card--flagship" : "event-card"}>
                      <p className="event-status">{sentence(e.status)}</p>
                      <h3>{e.title}</h3>
                      <p>{e.blurb}</p>
                      <p className="event-when">{whenLine(e)}</p>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpenId(e.id)}>
                        View details
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="sem-empty">Nothing of this kind is planned for this semester.</p>
              )}
            </section>
          );
        })}

        <h2 className="subhead">How we run events</h2>
        <ul className="principles" role="list">
          {operatingPrinciples.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <Modal open={!!current} onClose={close} labelledBy="ev-title">
        {current && (
          <>
            <p className="event-status">
              {sentence(current.tag)}. {sentence(current.status)}
            </p>
            <h2 id="ev-title">{current.title}</h2>
            <p>{current.detail}</p>
            <dl className="facts">
              {current.meta.map((m) => (
                <div key={m.k} className="fact-row">
                  <dt>{sentence(m.k)}</dt>
                  <dd>{orTba(m.v)}</dd>
                </div>
              ))}
            </dl>
            <h3 className="modal-sub">What you walk away with</h3>
            <ul className="takeaways" role="list">
              {current.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
}