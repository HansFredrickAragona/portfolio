"use client"

import { useEffect } from "react"

export function ScrollMotion() {
  useEffect(() => {
    let disposed = false
    let cleanup: (() => void) | undefined

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        if (disposed) return

        const gsap = gsapModule.default
        gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)

        const media = gsap.matchMedia()
        media.add("(prefers-reduced-motion: no-preference)", () => {
          const tweens = Array.from(
            document.querySelectorAll("main > section:not(#hero)"),
            (section) =>
              gsap.from(section.children, {
                y: 28,
                opacity: 0,
                duration: 0.65,
                stagger: 0.05,
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: section,
                  start: "top 88%",
                  once: true,
                },
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
              ) {
                tween.progress(1)
              }
            })
          }
          document.addEventListener("focusin", focus)
          return () => document.removeEventListener("focusin", focus)
        })

        const refresh = () => scrollTriggerModule.ScrollTrigger.refresh()
        const onTransitionEnd = (event: TransitionEvent) => {
          if (
            event.propertyName === "block-size" &&
            event.target instanceof HTMLDetailsElement
          ) {
            refresh()
          }
        }

        document.addEventListener("toggle", refresh, true)
        document.addEventListener("transitionend", onTransitionEnd)
        window.addEventListener("load", refresh)

        cleanup = () => {
          media.revert()
          document.removeEventListener("toggle", refresh, true)
          document.removeEventListener("transitionend", onTransitionEnd)
          window.removeEventListener("load", refresh)
        }
      },
    )

    return () => {
      disposed = true
      cleanup?.()
    }
  }, [])

  return null
}
