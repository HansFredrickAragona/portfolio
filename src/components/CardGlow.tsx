"use client"
import { useEffect } from "react"
export function CardGlow() {
  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    )
    let active: HTMLElement | null = null
    let frame = 0
    const clear = () => {
      active?.style.removeProperty("--glow-opacity")
      active = null
    }
    const move = (event: PointerEvent) => {
      if (!media.matches) return
      const card =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(".hover-card")
          : null
      if (card !== active) {
        clear()
        active = card
      }
      cancelAnimationFrame(frame)
      if (!card) return
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`)
        card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`)
        card.style.setProperty("--glow-opacity", "1")
      })
    }
    document.addEventListener("pointermove", move, { passive: true })
    document.documentElement.addEventListener("pointerleave", clear)
    media.addEventListener("change", clear)
    return () => {
      cancelAnimationFrame(frame)
      clear()
      document.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", clear)
      media.removeEventListener("change", clear)
    }
  }, [])
  return null
}
