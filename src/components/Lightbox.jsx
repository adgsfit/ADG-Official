import { useCallback, useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.5;
const DOUBLE_TAP_ZOOM = 2.5;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// photos: [{ title, caption, label, src? }]. A photo without `src` shows its placeholder label.
export default function Lightbox({ photos, index, onClose, onChange }) {
  const open = index !== null && photos[index] !== undefined;
  const photo = open ? photos[index] : null;
  const touch = useRef(null);

  // Zoom state: z = scale, x/y = pan offset in px (from the centre of the frame)
  const [view, setView] = useState({ z: 1, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const viewRef = useRef(view);
  viewRef.current = view;
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);
  const lastTap = useRef({ t: 0, x: 0, y: 0 });

  const step = useCallback(
    (d) => onChange((index + d + photos.length) % photos.length),
    [index, photos.length, onChange]
  );

  const reset = useCallback(() => setView({ z: 1, x: 0, y: 0 }), []);

  // Every new photo starts fitted to the screen
  useEffect(() => {
    reset();
  }, [index, open, reset]);

  // Keep the picture from being dragged out of view
  const constrain = (z, x, y) => {
    const f = frameRef.current;
    const im = imgRef.current;
    if (!f || !im) return { z, x: 0, y: 0 };
    const mx = Math.max(0, (im.offsetWidth * z - f.clientWidth) / 2);
    const my = Math.max(0, (im.offsetHeight * z - f.clientHeight) / 2);
    return { z, x: clamp(x, -mx, mx), y: clamp(y, -my, my) };
  };

  // Zoom to newZ, keeping the point (cx, cy) (relative to frame centre) under the cursor
  const zoomTo = useCallback((newZ, cx = 0, cy = 0) => {
    setView((v) => {
      const z = clamp(newZ, MIN_ZOOM, MAX_ZOOM);
      if (z === MIN_ZOOM) return { z: 1, x: 0, y: 0 };
      const k = z / v.z;
      return constrain(z, cx - (cx - v.x) * k, cy - (cy - v.y) * k);
    });
  }, []);

  const zoomBy = (delta) => zoomTo(viewRef.current.z + delta);

  const fromCentre = (clientX, clientY) => {
    const r = frameRef.current.getBoundingClientRect();
    return [clientX - (r.left + r.width / 2), clientY - (r.top + r.height / 2)];
  };

  // Keyboard: arrows = previous/next, + / - / 0 = zoom
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
      if (!photo?.src) return;
      if (e.key === "+" || e.key === "=") zoomTo(viewRef.current.z + ZOOM_STEP);
      if (e.key === "-" || e.key === "_") zoomTo(viewRef.current.z - ZOOM_STEP);
      if (e.key === "0") reset();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step, photo?.src, zoomTo, reset]);

  // Mouse wheel / trackpad pinch zooms toward the cursor
  useEffect(() => {
    const el = frameRef.current;
    if (!open || !photo?.src || !el) return undefined;
    const onWheel = (e) => {
      e.preventDefault();
      const [cx, cy] = fromCentre(e.clientX, e.clientY);
      zoomTo(viewRef.current.z * Math.exp(-e.deltaY * 0.0015), cx, cy);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open, index, photo?.src, zoomTo]);

  const onPointerDown = (e) => {
    if (!photo?.src) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const v = viewRef.current;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current = { type: "pinch", dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: v.z, moved: true };
    } else {
      gesture.current = { type: "pan", sx: e.clientX, sy: e.clientY, x0: v.x, y0: v.y, moved: false };
    }
  };

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId) || !gesture.current) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    if (g.type === "pinch" && pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const [cx, cy] = fromCentre((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomTo(g.z0 * (dist / g.dist), cx, cy);
    } else if (g.type === "pan") {
      const dx = e.clientX - g.sx;
      const dy = e.clientY - g.sy;
      if (Math.abs(dx) + Math.abs(dy) > 4) g.moved = true;
      if (viewRef.current.z > 1 && g.moved) {
        setDragging(true);
        setView(constrain(viewRef.current.z, g.x0 + dx, g.y0 + dy));
      }
    }
  };

  const onPointerUp = (e) => {
    if (!pointers.current.has(e.pointerId)) return;
    const g = gesture.current;
    pointers.current.delete(e.pointerId);
    setDragging(false);
    if (pointers.current.size === 1) {
      // one finger left after a pinch: continue as a pan from here
      const [p] = [...pointers.current.values()];
      const v = viewRef.current;
      gesture.current = { type: "pan", sx: p.x, sy: p.y, x0: v.x, y0: v.y, moved: true };
      return;
    }
    gesture.current = null;
    // Double click / double tap: toggle between fit and zoomed-in
    if (g && g.type === "pan" && !g.moved) {
      const now = Date.now();
      const last = lastTap.current;
      if (now - last.t < 320 && Math.hypot(e.clientX - last.x, e.clientY - last.y) < 24) {
        if (viewRef.current.z > 1) reset();
        else {
          const [cx, cy] = fromCentre(e.clientX, e.clientY);
          zoomTo(DOUBLE_TAP_ZOOM, cx, cy);
        }
        lastTap.current = { t: 0, x: 0, y: 0 };
      } else {
        lastTap.current = { t: now, x: e.clientX, y: e.clientY };
      }
    }
  };

  const zoomed = view.z > 1;
  const frameClass = [
    "lb-frame",
    photo?.src ? "lb-frame--zoomable" : "lb-frame--empty",
    zoomed ? "lb-frame--zoomed" : "",
    dragging ? "lb-frame--dragging" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Modal open={open} onClose={onClose} labelledBy="lb-title" size="lg">
      {photo && (
        <>
          <p className="panel-count">
            {index + 1} / {photos.length}
          </p>
          <div
            ref={frameRef}
            className={frameClass}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onTouchStart={(e) => (touch.current = e.touches.length === 1 ? e.touches[0].clientX : null)}
            onTouchEnd={(e) => {
              if (touch.current === null || viewRef.current.z > 1) return;
              const dx = e.changedTouches[0].clientX - touch.current;
              touch.current = null;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            {photo.src ? (
              <>
                <img
                  ref={imgRef}
                  src={photo.src}
                  alt={photo.title}
                  draggable={false}
                  style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.z})` }}
                />
                <div className="lb-zoom" role="group" aria-label="Zoom" onPointerDown={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => zoomBy(-ZOOM_STEP)}
                    disabled={view.z <= MIN_ZOOM}
                    aria-label="Zoom out"
                    title="Zoom out (-)"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    className="lb-level"
                    onClick={reset}
                    disabled={!zoomed}
                    aria-label="Reset zoom to fit"
                    title="Reset to fit (0)"
                  >
                    {Math.round(view.z * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={() => zoomBy(ZOOM_STEP)}
                    disabled={view.z >= MAX_ZOOM}
                    aria-label="Zoom in"
                    title="Zoom in (+)"
                  >
                    +
                  </button>
                </div>
              </>
            ) : (
              <p className="lb-empty">
                <strong>{photo.pending ?? "Photo to come"}</strong>
                {photo.label}
              </p>
            )}
          </div>
          <div className="lb-foot">
            <div>
              <h2 id="lb-title">{photo.title}</h2>
              <p className="member-meta">{photo.caption}</p>
            </div>
            <div className="chip-group">
              {photo.src && (
                <a className="chip" href={photo.src} target="_blank" rel="noreferrer">
                  Open full size
                </a>
              )}
              <button type="button" className="chip" onClick={() => step(-1)}>
                Previous photo
              </button>
              <button type="button" className="chip" onClick={() => step(1)}>
                Next photo
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}