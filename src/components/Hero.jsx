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
            <img src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/466465964_3422207871416291_5015784786576520712_n.jpg?stp=dst-jpg_tt6&cstp=mx958x960&ctp=s200x200&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFHtFIVm_5hUewatpB6VbDhYeEViD755NBh4RWIPvnk0A3bAPobZB_JAhX6_wn3nVSQWqndtZYvAqS2QsGcBkdM&_nc_ohc=ywXOG30S9HkQ7kNvwEfahy6&_nc_oc=Adp3LVe-KWkXKNGwU-seRyo_lZ7Gs9yOI4_Sjy_dyNKaqqWQEreCgg3oVpj7Ft-JieQ&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=_kglCLOTzQt64gg9aiX1Ww&_nc_ss=7b2a8&oh=00_AQCmqOsOSCxkBfXsuPQgVUW7K_-WH99AInWlkrmuhtE-GA&oe=6A69860E" alt="Ahsan Ahmed Sifat" />
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
