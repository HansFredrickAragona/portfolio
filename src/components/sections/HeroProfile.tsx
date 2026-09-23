import Image from "next/image";
import { experience } from "@/models/experience";
import { profile } from "@/models/profile";
import { HeroSocialRail } from "@/components/sections/HeroSocialRail";
import {
  HeroTechSymbols,
  HeroTechSymbolsRow,
} from "@/components/sections/HeroTechSymbols";

function CareersRail() {
  return (
    <div className="hero-careers">
      <ol className="space-y-4" role="list">
        {experience.map((item) => (
          <li key={item.id} className="border-border border-l-2 pl-3">
            <p className="text-text text-sm leading-snug font-semibold">{item.role}</p>
            <p className="text-primary text-xs">{item.org}</p>
            <p className="text-text-subtle text-xs">
              {item.start} – {item.end}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Hero() {
  return (
    <section data-motion-section aria-labelledby="hero-title" className="hero-editorial">
      <div className="container-shell">
        <h1
          data-reveal
          id="hero-title"
          aria-label={profile.fullName}
          className="hero-name"
        >
          <span>Hans Fredrick</span>
          <span className="hero-name-outline">Ong Aragona</span>
        </h1>
        <p data-reveal className="hero-positioning">
          {profile.headline}
        </p>

        <div className="hero-stage">
          <div data-reveal className="hero-career-rail">
            <CareersRail />
          </div>

          <div className="hero-portrait-group">
            <div data-reveal className="hero-portrait">
              <Image
                src="/images/portrait.webp"
                alt="Portrait of Hans Fredrick Ong Aragona"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 36vw"
              />
            </div>
            <HeroTechSymbols />
          </div>

          <div data-reveal className="hero-social-rail">
            <HeroSocialRail />
          </div>
        </div>

        <div data-reveal className="hero-bottom">
          <p className="text-text-muted measure max-w-[46ch] text-center">
            {profile.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.cta.primary.href}
              className="editorial-button editorial-button-primary"
            >
              {profile.cta.primary.label}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={profile.cta.secondary.href}
              className="editorial-button editorial-button-secondary"
            >
              {profile.cta.secondary.label}
            </a>
          </div>
          <HeroTechSymbolsRow />
        </div>
        <a href="#about" className="hero-scroll-cue">
          A little more about me <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
