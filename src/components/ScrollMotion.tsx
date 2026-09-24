"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export function ScrollMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const tweens = Array.from(
        document.querySelectorAll("main > section:not(#hero)"),
      ).map((section) =>
        gsap.from(section.children, {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.05,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: section, start: "top 88%", once: true },
        }),
      )
      const focus = (event: FocusEvent) => {
        tweens.forEach((tween) => {
          if (
            tween
              .targets()
              .some(
                (target) =>
                  target instanceof Element &&
                  target.contains(event.target as Node),
              )
          )
            tween.progress(1)
        })
      }
      document.addEventListener("focusin", focus)
      return () => document.removeEventListener("focusin", focus)
    })
    const refresh = () => ScrollTrigger.refresh()
    document.addEventListener("toggle", refresh, true)
    document.addEventListener("transitionend", refresh)
    window.addEventListener("load", refresh)
    return () => {
      media.revert()
      document.removeEventListener("toggle", refresh, true)
      document.removeEventListener("transitionend", refresh)
      window.removeEventListener("load", refresh)
    }
  }, [])
  return null
}
