import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hans Fredrick O. Aragona — Portfolio",
  description:
    "Full-stack developer and AI engineer portfolio — software products from database to interface.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
