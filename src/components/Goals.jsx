import { goals } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Goals() {
  return (
    <section id="goals">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Future Goals</p>
          <h2>Where I'm Heading</h2>
        </Reveal>

        <div className="goals-grid">
          {goals.map((goal, i) => (
            <Reveal key={goal} delay={(i % 3) + 1} className="goal-item">
              <div className="goal-mark" />
              <p>{goal}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
