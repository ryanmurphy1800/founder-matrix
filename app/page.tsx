"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Industries from "./components/Industries"
import SearchInterface from "./components/SearchInterface"
import Footer from "./components/Footer"
import FilterSidebar from "./components/FilterSidebar"
import { Filter } from "lucide-react"

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const handleApplyFilters = (filters: Record<string, string[]>) => {
    setActiveFilters(filters)
    setIsFilterOpen(false)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Industries />
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="terminal-text text-3xl">DISCOVER VISIONARIES</h2>
            <button className="retro-button flex items-center" onClick={toggleFilter}>
              <Filter className="mr-2" size={18} />
              FILTER
            </button>
          </div>
          <SearchInterface filters={activeFilters} />
        </div>
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      </section>
      <Footer />
    </div>
  )
}

