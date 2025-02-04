"use client"

import Image from "next/image"

type SearchInterfaceProps = {
  filters: Record<string, string[]>
}

export default function SearchInterface({ filters }: SearchInterfaceProps) {
  const founders = [
    {
      name: "ELENA RODRIGUEZ",
      company: "NEURALINK DYNAMICS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop",
      score: 98,
      experienceLevel: "Experienced Creator",
      startupStage: "Series A+",
      industry: "Tech",
      location: "Remote/Distributed",
      teamSize: "11–50",
    },
    {
      name: "JAMES CHEN",
      company: "QUANTUM SOLUTIONS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
      score: 96,
      experienceLevel: "Serial Entrepreneur",
      startupStage: "Seed",
      industry: "Tech",
      location: "Select Country/Region",
      teamSize: "6–10",
    },
    {
      name: "AISHA PATEL",
      company: "BIOTECH INNOVATIONS",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop",
      score: 94,
      experienceLevel: "First-Time Creator",
      startupStage: "MVP/Prototype",
      industry: "Healthcare",
      location: "Select Country/Region",
      teamSize: "2–5",
    },
  ]

  const filteredFounders = founders.filter((founder) => {
    return Object.entries(filters).every(([category, selectedOptions]) => {
      if (selectedOptions.length === 0) return true
      switch (category) {
        case "Creator Score":
          return selectedOptions.some((range) => {
            const [min, max] = range.split(" to ").map(Number)
            return founder.score >= min && founder.score <= max
          })
        case "Experience Level":
          return selectedOptions.includes(founder.experienceLevel)
        case "Startup Stage":
          return selectedOptions.includes(founder.startupStage)
        case "Industry / Sector":
          return selectedOptions.includes(founder.industry)
        case "Location":
          return selectedOptions.includes(founder.location)
        case "Team Size":
          return selectedOptions.includes(founder.teamSize)
        default:
          return true
      }
    })
  })

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFounders.map((founder, index) => (
          <div
            key={index}
            className="border border-white p-6 hover:bg-white hover:text-black transition-colors duration-300"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale"
                />
              </div>
              <div className="text-center">
                <h3 className="terminal-text text-xl mb-1">{founder.name}</h3>
                <p className="terminal-text text-sm mb-2">{founder.company}</p>
                <p className="terminal-text text-sm">Score: {founder.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

