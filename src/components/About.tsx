import { FloatingIcons } from "./FloatingIcons"

import { profile, education, leadership, interests } from "@/data/profile"

export function About() {
  return (
    <section id="about" aria-label="About Hans" className="about-section">
      <FloatingIcons seed={6} />
      <div className="about-section-shell">
        <h2 className="section-title">About</h2>
        <div className="about-layout glass-panel">
          <figure className="about-photo">
            <img
              src="/assets/about-laptop.webp"
              alt="Hans working at a laptop"
              loading="lazy"
            />
          </figure>
          <div className="about-copy">
            <p className="about-intro">{profile.detail}</p>
            <div>
              <h3>Education</h3>
              <p>{education.degree}</p>
              <p>
                {education.institution} · {education.end}
              </p>
              <p className="muted-copy">{education.honors.join(" · ")}</p>
            </div>
            <div>
              <h3>Leadership</h3>
              <ul>
                {leadership.map((item) => (
                  <li key={item.id}>
                    <strong>{item.role}</strong> · {item.org}
                    <span className="muted-copy">: {item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Beyond work</h3>
              <ul>
                {interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
