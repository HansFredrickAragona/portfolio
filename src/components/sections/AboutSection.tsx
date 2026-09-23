import Image from "next/image";
import { aboutPhotos } from "@/models/about-photos";
import { aboutSkillCategories } from "@/models/skills";
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
          <h3 className="editorial-display">
            Curious mind.
            <br />
            <em>Practical builder.</em>
          </h3>
          <p className="text-text-muted mt-6">{profile.detail}</p>
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
        </div>
      </div>
      <div data-motion-section className="about-personal-grid">
        <div data-reveal>
          <Photo photo={aboutPhotos[1]} className="about-outdoor-photo" />
        </div>
        <div data-reveal className="about-beyond">
          <h3 className="editorial-display">
            More than
            <br />
            <em>the screen.</em>
          </h3>
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
      <div id="skills" data-motion-section className="about-skills">
        <h3 data-reveal className="editorial-display mb-6">
          Skills
        </h3>
        <div className="skills-rows">
          {aboutSkillCategories.map((category) => (
            <details data-reveal key={category.id} className="skill-row">
              <summary>
                <h4>{category.label}</h4>
                <span aria-hidden="true" className="skill-expand">
                  +
                </span>
              </summary>
              <ul aria-label={category.label}>
                {category.entries.map((entry) => (
                  <li key={entry.id}>
                    {"icon" in entry && entry.icon && (
                      <span aria-hidden="true" className="skill-icon">
                        <TechIcon id={entry.icon} className="h-5 w-5" />
                      </span>
                    )}
                    <span>{entry.name}</span>
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
