import { education } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2>Where I'm studying</h2>
        </Reveal>

        <Reveal delay={1} className="edu-card">
          <div className="left">
            <div className="edu-badge">CSE</div>
            <div>
              <h3>{education.degree}</h3>
              <div className="school">{education.school}</div>
            </div>
          </div>
          <div className="status-pill">{education.status}</div>
        </Reveal>
      </div>
    </section>
  );
}
