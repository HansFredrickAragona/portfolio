import { profile, education, leadership, interests } from "@/data/profile"

export function About() {
  return (
    <section id="about" aria-label="About Hans" className="about-section">
      <div className="about-layout glass-panel">
        <figure className="about-photo">
          <img
            src="/assets/about-laptop.webp"
            alt="Temporary AI portrait of Hans working at a laptop"
            loading="lazy"
          />
          <figcaption>Temporary AI portrait</figcaption>
        </figure>
        <div className="about-copy">
          <p className="about-intro">{profile.detail}</p>
          <div>
            <h2>Education</h2>
            <p>{education.degree}</p>
            <p>
              {education.institution} · {education.end}
            </p>
            <p className="muted-copy">{education.honors.join(" · ")}</p>
          </div>
          <div>
            <h2>Leadership</h2>
            <ul>
              {leadership.map((item) => (
                <li key={item.id}>
                  <strong>{item.role}</strong> · {item.org}
                  <span className="muted-copy"> — {item.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Beyond work</h2>
            <ul>
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
