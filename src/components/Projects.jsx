import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function ProjectLink({ href, children }) {
  if (!href) {
    return (
      <a href="#" onClick={(e) => e.preventDefault()} title="Link coming soon">
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Featured Projects</p>
          <h2>Things I've built</h2>
          <p>A mix of web platforms and AI research — links go live as each repo is published.</p>
        </Reveal>

        <div className="proj-grid">
          {projects.map((proj, i) => (
            <Reveal key={proj.id} delay={(i % 4) + 1} className="proj-card">
              <div className="proj-ph">
                {proj.image ? (
                  <img className="proj-img" src={proj.image} alt={proj.title} loading="lazy" />
                ) : (
                  <span className="tagnum">{proj.number}</span>
                )}
              </div>
              <div className="proj-body">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="proj-tech">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  <ProjectLink href={proj.projectUrl}>View Project</ProjectLink>
                  <ProjectLink href={proj.githubUrl}>GitHub</ProjectLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
