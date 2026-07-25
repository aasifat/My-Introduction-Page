import { journey } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">My Journey</p>
          <h2>Match in progress</h2>
          <p>Still going — here's the timeline so far, told the way I'd watch a match.</p>
        </Reveal>

        <Reveal delay={1} className="match-strip">
          <span>Sifat</span>
          <span><b>In Progress</b> · 90'+</span>
          <span>The Long Game</span>
        </Reveal>

        <div className="timeline">
          {journey.map((item, i) => (
            <Reveal
              key={item.minute}
              delay={Math.min(Math.floor(i / 2) + 1, 4)}
              className={`t-item ${item.ht ? "ht" : ""} ${item.now ? "now" : ""}`}
            >
              <div className="t-min">{item.minute}</div>
              <div className="t-dot-col"><div className="t-dot" /></div>
              <div className="t-content">
                <span className="tag">{item.tag}</span>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
