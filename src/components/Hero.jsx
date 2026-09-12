import { hero } from "../data/content.js";
import Reveal from "./Reveal.jsx";
export default function Hero() {
  return (
    <section id="home">
      <div className="wrap hero-grid">
        <div className="hero-num" aria-hidden="true">10</div>

        <div className="hero-text">
          <Reveal as="p" className="eyebrow">{hero.eyebrow}</Reveal>

          <Reveal delay={1}>
            <h1>
              {hero.name.split(" ").slice(0, -1).join(" ")}
              <br />
              {hero.name.split(" ").slice(-1)}
            </h1>
          </Reveal>

          <Reveal delay={1} className="hero-alias">
            <>goes by <span className="tag">{hero.alias}</span></>
          </Reveal>

          <Reveal delay={2} as="p" className="role-line">
            {hero.roles.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="sep">·</span>}
                <b>{role}</b>
              </span>
            ))}
          </Reveal>

          <Reveal delay={2} as="p" className="intro">{hero.intro}</Reveal>

          <Reveal delay={3} className="btn-row">
            <a href="#about" className="btn btn-primary">Explore My Story</a>
            <a href="#projects" className="btn btn-ghost">View My Projects</a>
          </Reveal>
        </div>

        <Reveal delay={2} className="profile-card">
          <div className="profile-ph">
            <img src={"/projects/IMG_5015.JPG"} alt="Ahsan Ahmed Sifat" />
          </div>
          <div className="profile-meta">
            <span>Role <b>CSE Student</b></span>
            <span>Based in <b>Bangladesh</b></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
