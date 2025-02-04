"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import RankedCreator from "../components/RankedCreator"
import FilterSidebar from "../components/FilterSidebar"
import { Filter } from "lucide-react"

export default function RanksPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const handleApplyFilters = (filters: Record<string, string[]>) => {
    setActiveFilters(filters)
    setIsFilterOpen(false)
    // You can add logic here to filter the ranked creators list
    // based on the activeFilters
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const creators = [
    {
      name: "ELENA RODRIGUEZ",
      company: "NEURALINK DYNAMICS",
      image: "/placeholder.svg?height=100&width=100",
      score: 98,
      brief: "Revolutionizing brain-computer interfaces",
    },
    {
      name: "JAMES CHEN",
      company: "QUANTUM SOLUTIONS",
      image: "/placeholder.svg?height=100&width=100",
      score: 96,
      brief: "Advancing quantum computing technology",
    },
    {
      name: "AISHA PATEL",
      company: "BIOTECH INNOVATIONS",
      image: "/placeholder.svg?height=100&width=100",
      score: 94,
      brief: "Pioneering gene therapy treatments",
    },
    {
      name: "MARCUS WONG",
      company: "AI VENTURES",
      image: "/placeholder.svg?height=100&width=100",
      score: 92,
      brief: "Developing cutting-edge AI applications",
    },
    {
      name: "SOPHIA ANDERSON",
      company: "SPACE DYNAMICS",
      image: "/placeholder.svg?height=100&width=100",
      score: 90,
      brief: "Innovating space exploration technologies",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow relative">
        <div className="p-8">
          <div className="mb-8">
            <button className="retro-button flex items-center" onClick={toggleFilter}>
              <Filter className="mr-2" size={18} />
              FILTER
            </button>
          </div>
          <div className="max-w-3xl mx-auto">
            {creators.map((creator, index) => (
              <RankedCreator key={index} rank={index + 1} creator={creator} />
            ))}
          </div>
        </div>
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      </main>
      <Footer />
    </div>
  )
}

