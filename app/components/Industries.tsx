"use client"

import { useState } from "react"
import { Brain, Dna, Zap, Atom, BotIcon as Robot, Rocket } from "lucide-react"

const industries = [
  { name: "ARTIFICIAL INTELLIGENCE", icon: Brain },
  { name: "BIOTECHNOLOGY", icon: Dna },
  { name: "CLEAN ENERGY", icon: Zap },
  { name: "QUANTUM COMPUTING", icon: Atom },
  { name: "ROBOTICS", icon: Robot },
  { name: "SPACE TECHNOLOGY", icon: Rocket },
]

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="terminal-text text-3xl text-center mb-8">TRENDING INDUSTRIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-white p-6 hover:bg-white hover:text-black transition-colors duration-300 relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <industry.icon
                className={`absolute top-4 right-4 w-12 h-12 text-white transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? "animate-float opacity-50" : "opacity-20"
                }`}
              />
              <h3 className="terminal-text text-xl text-center relative z-10">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider w-full max-w-4xl mx-auto my-8" />
    </section>
  )
}

