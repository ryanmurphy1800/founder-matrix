import "./globals.css"
import { Space_Mono, VT323 } from "next/font/google"
import ASCIIBorder from "./components/ASCIIBorder"
import type { Metadata } from "next"
import type React from "react" // Import React

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Creator Queue - Digital Innovation Network",
  description: "Here for the next generation of innovators",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceMono.className} ${vt323.className}`}>
      <body className="bg-black text-white">
        <ASCIIBorder />
        <div className="scan-line" />
        <div className="geometric-pattern" />
        <div className="diagonal-lines" />
        <div className="dot-matrix" />
        {children}
      </body>
    </html>
  )
}

