import { DesktopEnhancements } from "@/components/ui/DesktopEnhancements"
import { Hero } from "@/components/sections/Hero"

import { SiteNavigation } from "@/components/ui/SiteNavigation"

import { Projects } from "@/components/sections/Projects"

import { Services } from "@/components/sections/Services"

import { Experience } from "@/components/sections/Experience"

import { About } from "@/components/sections/About"

import { Skills } from "@/components/sections/Skills"

import { Contact } from "@/components/sections/Contact"

import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <DesktopEnhancements />
      <SiteNavigation />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Experience />
        <About />
        <Skills />
        <div className="contact-screen">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
