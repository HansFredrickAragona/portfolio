import Image from "next/image";
import { aboutPhotos } from "@/models/about-photos";
import { aboutSkillCategories } from "@/models/skills";
import { recognition } from "@/models/recognition";
import { leadership } from "@/models/leadership";
import { profile } from "@/models/profile";
import { education } from "@/models/education";
import { TechIcon } from "@/components/icons/TechIcon";
import { Section } from "@/components/ui/Section";

function Photo({
  photo,
  className = "",
}: {
  photo: (typeof aboutPhotos)[number];
  className?: string;
}) {
  return (
    <figure className={`about-photo ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 767px) 90vw, 33vw"
        className="object-cover"
      />
      {photo.temporary && <figcaption>Temporary AI portrait</figcaption>}
    </figure>
  );
}

export function AboutSection() {
  const edu = education[0];
  return (
    <Section id="about" title="About me" className="about-editorial">
      <div data-motion-section className="about-story-grid">
        <div data-reveal className="about-intro">
          <p className="editorial-kicker">01 / Who I am</p>
          <h3 className="editorial-display">
            Curious mind.
            <br />
            <em>Practical builder.</em>
          </h3>
          <p className="text-text-muted mt-6">{profile.detail}</p>
          <p className="text-text-muted mt-4">{profile.summary}</p>
          {edu && (
            <div className="about-education">
              <p className="font-semibold">{edu.institution}</p>
              <p>{edu.degree}</p>
              <p className="text-text-subtle">{edu.end}</p>
              <p className="text-primary mt-2">{edu.honors.join(" · ")}</p>
            </div>
          )}
        </div>
        <div data-reveal className="about-main-photo">
          <Photo photo={aboutPhotos[0]} />
        </div>
        <div data-reveal className="about-achievements">
          <p className="editorial-kicker">02 / Achievements & leadership</p>
          <h3 className="editorial-subheading">
            Building things.
            <br />
            Bringing people together.
          </h3>
          <ul className="about-leadership-list">
            {leadership.map((item) => (
              <li key={item.id}>
                <p className="font-semibold">{item.role}</p>
                <p className="text-text-muted text-sm">{item.org}</p>
                <p className="text-text-subtle text-xs">{item.period}</p>
              </li>
            ))}
          </ul>
          <ul className="about-recognition">
            {recognition.map((item) => (
              <li key={item.id}>
                <span aria-hidden="true">↗</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div data-motion-section className="about-personal-grid">
        <div data-reveal>
          <Photo photo={aboutPhotos[1]} className="about-outdoor-photo" />
        </div>
        <div data-reveal className="about-beyond">
          <p className="editorial-kicker">03 / Beyond work</p>
          <h3 className="editorial-display">
            More than
            <br />
            <em>the screen.</em>
          </h3>
          <p className="text-text-muted mt-5">
            Varsity swimming, club instruction, and a community built around learning.
          </p>
          <ul className="about-interests">
            <li>
              <span>01</span>Varsity swimming (Class A) and club instruction.
            </li>
            <li>
              <span>02</span>Founded and chaired an AWS Community-connected campus club.
            </li>
            <li>
              <span>03</span>Presentations, pitching events, and community tech talks.
            </li>
          </ul>
        </div>
        <div data-reveal className="about-third-photo">
          <Photo photo={aboutPhotos[2]} />
        </div>
      </div>
      <div data-motion-section className="about-skills">
        <div data-reveal className="about-skills-heading">
          <div>
            <p className="editorial-kicker">04 / Skills & technical capabilities</p>
            <h3 className="editorial-display">
              The tools behind
              <br />
              <em>the work.</em>
            </h3>
          </div>
          <p className="text-text-muted max-w-[32ch]">
            Explore the technologies and skills I use, with context from my projects and
            experience.
          </p>
        </div>
        <div className="skills-editorial-grid">
          {aboutSkillCategories.map((category, index) => (
            <details
              data-reveal
              key={category.id}
              className="skill-category"
              open={index < 2}
            >
              <summary>
                <span className="skill-category-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4>{category.label}</h4>
                <span aria-hidden="true" className="skill-category-toggle">
                  +
                </span>
              </summary>
              <ul>
                {category.entries.map((entry) => (
                  <li key={entry.id}>
                    {"icon" in entry && entry.icon ? (
                      <span aria-hidden="true" className="skill-icon">
                        <TechIcon id={entry.icon} className="h-5 w-5" />
                      </span>
                    ) : (
                      <span aria-hidden="true" className="skill-icon">
                        ↗
                      </span>
                    )}
                    <span>
                      <span className="block text-sm font-semibold">{entry.name}</span>
                      <span className="text-text-muted block text-xs leading-relaxed">
                        {entry.evidence}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
