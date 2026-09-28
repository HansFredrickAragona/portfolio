"use client"

import { lazy, Suspense, useEffect, useState } from "react"

const CardGlow = lazy(() =>
  import("./CardGlow").then(({ CardGlow }) => ({ default: CardGlow })),
)
const ScrollMotion = lazy(() =>
  import("./ScrollMotion").then(({ ScrollMotion }) => ({
    default: ScrollMotion,
  })),
)

export function DesktopEnhancements() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const desktopMotion = window.matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
    )
    const update = () => setEnabled(desktopMotion.matches)

    update()
    desktopMotion.addEventListener("change", update)
    return () => desktopMotion.removeEventListener("change", update)
  }, [])

  if (!enabled) return null

  return (
    <Suspense fallback={null}>
      <CardGlow />
      <ScrollMotion />
    </Suspense>
  )
}
