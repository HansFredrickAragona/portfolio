import { FloatingIcons } from "./FloatingIcons"

import { RandomPattern } from "./RandomPattern"

import { HeroSocialButtons } from "./HeroSocial"

export function Hero({ dark }: { dark: boolean }) {
  return (
    <section id="hero" className="hero-section">
      <FloatingIcons seed={0} />
      <div className="hero-composition">
        <h1 className="hero-name">Hans Fredrick O. Aragona</h1>
        <div className="hero-stage">
          <div className="hero-github-panel">
            <p className="hero-roles">
              Full-Stack Developer · AI &amp; ML Engineer · Team Leader
            </p>
            <div className="hero-contributions">
              <RandomPattern dark={dark} />
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/assets/hans-portrait2.jpg"
              alt="Hans Fredrick O. Aragona"
            />
            <div className="hero-actions">
              <a href="#projects" className="hover-card">
                View my work ↗
              </a>
              <a href="#contact" className="hover-card">
                Let’s get in touch
              </a>
            </div>
          </div>
          <div className="hero-intro">
            <p>
              Building complete software products from database to interface,
              combining full-stack engineering with machine learning, clear
              communication, and collaborative leadership.
            </p>
            <HeroSocialButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
