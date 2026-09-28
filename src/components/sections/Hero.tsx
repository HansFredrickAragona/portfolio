import Link from "next/link"
import Image from "next/image"
import { FloatingIcons } from "@/components/ui/FloatingIcons"

import { RandomPattern } from "@/components/ui/RandomPattern"

import { HeroSocialButtons } from "@/components/ui/HeroSocial"

export function Hero() {
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
              <RandomPattern />
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/assets/hans-portrait-optimized.webp"
              alt="Hans Fredrick O. Aragona"
              width={1200}
              height={1800}
              sizes="(max-width: 900px) 340px, (max-width: 1439px) 33vw, 420px"
              priority
              fetchPriority="high"
            />
            <div className="hero-actions">
              <a href="#projects" className="hover-card">
                View my work ↗
              </a>
              <Link href="#contact" scroll className="hover-card">
                Let’s get in touch
              </Link>
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
