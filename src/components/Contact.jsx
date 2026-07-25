import { contactLinks } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-box">
          <h2>Let's Connect</h2>
          <p>Open to conversations about software, AI, or the next big match. Reach out any of these ways.</p>
          <div className="contact-links">
            {contactLinks.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  title="Link coming soon"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
