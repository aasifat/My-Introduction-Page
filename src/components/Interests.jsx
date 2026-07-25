import { interests } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Interests() {
  return (
    <section id="interests">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Beyond the Code</p>
          <h2>My Interests</h2>
          <p>The things I show up for outside a code editor.</p>
        </Reveal>

        <div className="int-grid">
          {interests.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) + 1}
              className={`int-card ${item.accent ? "accent" : ""}`}
            >
              <div className="glyph">{item.glyph}</div>
              <h4>{item.title}</h4>
              <span>{item.note}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
