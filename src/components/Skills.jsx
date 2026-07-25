import { skillCategories } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Technical Skills</p>
          <h2>What I build with</h2>
          <p>Tools and technologies I use regularly — grouped by where they fit, not ranked by score.</p>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) + 1}
              className={`skill-card ${cat.wide ? "wide-span" : ""}`}
            >
              <h3>{cat.title}</h3>
              <div className="chip-row">
                {cat.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
