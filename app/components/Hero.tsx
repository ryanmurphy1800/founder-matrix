"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import SearchBar from "./SearchBar"
import ScrollingImages from "./ScrollingImages"

const creators = [
  {
    name: "SARAH CHEN",
    company: "QUANTUM LABS",
    tagline: "REVOLUTIONIZING QUANTUM COMPUTING",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop",
    score: 95,
  },
  {
    name: "ALEX RIVERA",
    company: "NEURAL INTERFACE",
    tagline: "BRIDGING MINDS AND MACHINES",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop",
    score: 92,
  },
  {
    name: "KAI ZHANG",
    company: "BIOFORGE",
    tagline: "ENGINEERING THE FUTURE OF LIFE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
    score: 90,
  },
]

export default function Hero() {
  const [currentCreator, setCurrentCreator] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCreator((prev) => (prev + 1) % creators.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mb-8">
        <SearchBar />
      </div>

      <h1 className="terminal-text text-4xl md:text-6xl text-center mb-6 glitch">
        HERE FOR THE NEXT
        <br />
        GENERATION OF INNOVATORS
      </h1>

      <h2 className="terminal-text text-xl text-center mb-4">TOP RANKED CREATORS</h2>

      <div className="relative w-full max-w-4xl mb-8">
        <div className="flex overflow-hidden">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentCreator * 100}%)`,
              }}
            >
              <div className="bg-black border border-white p-6 mx-2">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src={creator.image || "/placeholder.svg"}
                      alt={creator.name}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="terminal-text text-xl mb-1">{creator.name}</h3>
                    <p className="terminal-text text-sm mb-2">{creator.company}</p>
                    <p className="terminal-text text-xs mb-2">{creator.tagline}</p>
                    <p className="terminal-text text-sm">Score: {creator.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider w-full max-w-4xl mx-auto mb-8" />

      <ScrollingImages />

      <div className="section-divider w-full max-w-4xl mx-auto mt-8" />
    </section>
  )
}

