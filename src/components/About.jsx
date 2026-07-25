import { about } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import formatText from "../lib/formatText.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">About Me</p>
          <h2>The short version of my story</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={1}>
            {about.paragraphs.map((para, i) => (
              <p key={i}>{formatText(para)}</p>
            ))}
          </Reveal>

          <Reveal delay={2} className="facts">
            <h3>Quick Facts</h3>
            <dl>
              {about.facts.map((fact) => (
                <div className="row" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
