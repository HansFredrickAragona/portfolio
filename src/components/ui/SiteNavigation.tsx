"use client"

import { Nav } from "./Nav"
import { useDarkMode } from "@/hooks/useDarkMode"

export function SiteNavigation() {
  const [dark, setDark] = useDarkMode()

  return <Nav dark={dark} setDark={setDark} />
}
