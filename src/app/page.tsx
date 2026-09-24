"use client"

import { ScrollMotion } from "@/components/ScrollMotion"

import { useDarkMode } from "@/hooks/useDarkMode"

import { Nav } from "@/components/Nav"

import { Hero } from "@/components/Hero"

import { Projects } from "@/components/Projects"

import { Services } from "@/components/Services"

import { Experience } from "@/components/Experience"

import { About } from "@/components/About"

import { Skills } from "@/components/Skills"

import { Contact } from "@/components/Contact"

import { Footer } from "@/components/Footer"

export default function Home() {
  const [dark, setDark] = useDarkMode()

  return (
    <>
      <ScrollMotion />
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero dark={dark} />
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
