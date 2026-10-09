import SocialIcon from "./SocialIcon.jsx";
import { socials } from "../data/socials.js";

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`social-links ${className}`.trim()} role="list">
      {socials.map((s) => {
        const external = !s.href.startsWith("mailto:");
        return (
          <li key={s.id}>
            <a
              href={s.href}
              aria-label={s.name}
              title={s.name}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <SocialIcon id={s.id} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}