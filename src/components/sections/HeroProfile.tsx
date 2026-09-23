import Image from "next/image";
import { profile } from "@/models/profile";
import {
  HeroTechSymbols,
  HeroTechSymbolsRow,
} from "@/components/sections/HeroTechSymbols";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-t-0">
      <div className="container-shell grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="text-text font-serif text-4xl leading-tight font-bold tracking-tight sm:text-5xl"
          >
            {profile.headline}
          </h1>
          <p className="text-text-muted measure mt-5 max-w-[40ch] text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
        <div className="relative lg:col-span-5">
          <div className="border-border bg-bg-subtle relative z-0 aspect-[4/5] w-full overflow-hidden rounded border">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Hans Fredrick"
              width={1200}
              height={1800}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <HeroTechSymbols />
        </div>
      </div>
    </section>
  );
}
