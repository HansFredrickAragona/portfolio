import type { Metadata } from "next"
import { Fraunces, Outfit } from "next/font/google"

import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Hans Fredrick O. Aragona: Portfolio",

  description:
    "Full-stack developer and AI engineer portfolio: software products from database to interface.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  )
}
