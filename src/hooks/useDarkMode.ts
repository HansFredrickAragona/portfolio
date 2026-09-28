"use client"

import { useState, useEffect, useRef } from "react"
import { flushSync } from "react-dom"

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

export function useDarkMode() {
  const transitionId = useRef(0)
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("theme") === "dark"
  })
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  const transitionDarkMode = (nextDark: boolean, origin?: HTMLElement) => {
    const root = document.documentElement
    const startViewTransition = (document as ViewTransitionDocument)
      .startViewTransition

    if (
      !origin ||
      !startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDark(nextDark)
      return
    }

    const bounds = origin.getBoundingClientRect()
    root.style.setProperty(
      "--theme-transition-x",
      `${bounds.left + bounds.width / 2}px`,
    )
    root.style.setProperty(
      "--theme-transition-y",
      `${bounds.top + bounds.height / 2}px`,
    )
    root.classList.add("theme-transition-active")
    const currentTransitionId = ++transitionId.current

    const clearTransitionStyles = () => {
      if (currentTransitionId !== transitionId.current) return
      root.classList.remove("theme-transition-active")
      root.style.removeProperty("--theme-transition-x")
      root.style.removeProperty("--theme-transition-y")
    }

    try {
      const transition = startViewTransition.call(document, () => {
        flushSync(() => {
          root.classList.toggle("dark", nextDark)
          localStorage.setItem("theme", nextDark ? "dark" : "light")
          setDark(nextDark)
        })
      })
      void transition.finished.then(
        clearTransitionStyles,
        clearTransitionStyles,
      )
    } catch {
      clearTransitionStyles()
      root.classList.toggle("dark", nextDark)
      localStorage.setItem("theme", nextDark ? "dark" : "light")
      setDark(nextDark)
    }
  }

  return [dark, transitionDarkMode] as const
}
