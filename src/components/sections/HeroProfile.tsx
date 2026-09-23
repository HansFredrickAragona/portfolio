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
    <div>
      <p className="text-text-subtle mb-3 text-xs tracking-[0.14em] uppercase">Careers</p>
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
    <section aria-labelledby="hero-title" className="border-t-0">
      <div className="container-shell py-10 lg:py-14">
        <h1
          id="hero-title"
          className="text-text mb-2 text-center font-serif text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {profile.fullName}
        </h1>
        <p className="text-primary mx-auto mb-10 max-w-[40ch] text-center text-base sm:text-lg">
          {profile.headline}
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="order-2 lg:order-1 lg:col-span-3 lg:self-start lg:pt-6">
            <CareersRail />
          </div>

          <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:col-span-6 lg:max-w-md">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] lg:max-w-none">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Hans Fredrick Ong Aragona"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 36vw"
              />
            </div>
            <HeroTechSymbols />
          </div>

          <div className="order-3 lg:col-span-3 lg:self-start lg:pt-6 lg:text-right">
            <HeroSocialRail />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-text-muted measure max-w-[46ch] text-center">
            {profile.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profile.cta.primary.href}
              className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            >
              {profile.cta.primary.label}
            </a>
            <a
              href={profile.cta.secondary.href}
              className="border-accent text-accent hover:bg-accent hover:text-accent-fg inline-flex min-h-11 items-center rounded border px-5 py-3 text-sm font-medium transition-colors"
            >
              {profile.cta.secondary.label}
            </a>
          </div>
          <HeroTechSymbolsRow />
        </div>
      </div>
    </section>
  );
}
