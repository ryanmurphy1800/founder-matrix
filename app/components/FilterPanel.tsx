"use client"

import { useState } from "react"
import SearchableDropdown from "./SearchableDropdown"
import { ChevronDown, ChevronUp } from "lucide-react"

type FilterOption = {
  label: string
  options: string[]
}

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]

const industries = [
  "Tech",
  "Healthcare",
  "Consumer Goods",
  "Social Impact",
  "Education",
  "Finance / FinTech",
  "Entertainment / Media",
  "Gaming / eSports",
  "Energy / CleanTech",
  "Supply Chain / Logistics",
  "Travel / Hospitality",
  "Real Estate / PropTech",
  "Agriculture / AgTech",
  "Non-Profit / NGO",
  "Government / CivicTech",
  "AI / Machine Learning",
  "AR / VR / XR",
  "E-commerce",
  "Mobility / Transportation",
  "Security / Cybersecurity",
  "Sports / Fitness",
  "Marketplace",
  "Food & Beverage",
  "Biotechnology / Pharma",
  "Robotics / Drones",
  "Other",
]

const coreFilters: FilterOption[] = [
  {
    label: "Creator Score",
    options: ["1 to 25", "26 to 50", "51 to 75", "76 to 100"],
  },
  {
    label: "Experience Level",
    options: ["First-Time Creator", "Experienced Creator", "Serial Entrepreneur"],
  },
  {
    label: "Startup Stage",
    options: ["Idea/Pre-Seed", "MVP/Prototype", "Seed", "Series A+", "Profitable/Bootstrapped"],
  },
  {
    label: "Industry / Sector",
    options: industries,
  },
  {
    label: "Location",
    options: ["Remote", "In Person", ...countries],
  },
  {
    label: "Team Size",
    options: ["Solo (1)", "2–5", "6–10", "11–50", "50+"],
  },
]

const advancedFilters: FilterOption[] = [
  {
    label: "Funding Raised",
    options: ["Bootstrapped", "< $100K", "$100K – $1M", "$1M+"],
  },
  {
    label: "Currently Raising",
    options: ["Yes", "No"],
  },
  {
    label: "Seeking",
    options: ["Funding", "Co-Founders", "Mentors/Advisors", "Hiring"],
  },
  {
    label: "Business Model",
    options: ["B2B", "B2C", "Non-Profit", "Marketplace", "SaaS"],
  },
  {
    label: "Impact / Diversity Focus",
    options: ["Women-Led", "Black-Led", "Latinx-Led", "Climate / Sustainability"],
  },
  {
    label: "Traction / Revenue",
    options: ["Pre-Revenue", "$1K–$10K Monthly", "$10K+ Monthly"],
  },
]

type FilterPanelProps = {
  onApplyFilters: (filters: Record<string, string[]>) => void
}

export default function FilterPanel({ onApplyFilters }: FilterPanelProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Core Filters": true,
    "Advanced Filters": false,
  })

  const handleFilterChange = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev }
      if (!updatedFilters[category]) {
        updatedFilters[category] = []
      }
      const index = updatedFilters[category].indexOf(option)
      if (index > -1) {
        updatedFilters[category].splice(index, 1)
      } else {
        updatedFilters[category].push(option)
      }
      return updatedFilters
    })
  }

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters)
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="w-64 bg-black border-l border-white p-4 overflow-y-auto">
      <h2 className="terminal-text text-2xl mb-4">FILTERS</h2>
      <div className="space-y-4">
        <FilterSection
          title="Core Filters"
          filters={coreFilters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          isExpanded={expandedSections["Core Filters"]}
          onToggle={() => toggleSection("Core Filters")}
        />
        <FilterSection
          title="Advanced Filters"
          filters={advancedFilters}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          isExpanded={expandedSections["Advanced Filters"]}
          onToggle={() => toggleSection("Advanced Filters")}
        />
      </div>
      <button onClick={handleApplyFilters} className="retro-button mt-6 w-full">
        APPLY FILTERS
      </button>
    </div>
  )
}

type FilterSectionProps = {
  title: string
  filters: FilterOption[]
  selectedFilters: Record<string, string[]>
  onFilterChange: (category: string, option: string) => void
  isExpanded: boolean
  onToggle: () => void
}

function FilterSection({ title, filters, selectedFilters, onFilterChange, isExpanded, onToggle }: FilterSectionProps) {
  return (
    <div>
      <button className="terminal-text text-lg mb-2 flex items-center justify-between w-full" onClick={onToggle}>
        {title}
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isExpanded && (
        <div className="space-y-4">
          {filters.map((filter) => (
            <div key={filter.label} className="mb-4">
              <h4 className="terminal-text text-sm mb-1">{filter.label}</h4>
              <SearchableDropdown
                options={filter.options}
                selectedOptions={selectedFilters[filter.label] || []}
                onChange={(option) => onFilterChange(filter.label, option)}
                placeholder={`Select ${filter.label}`}
                maxHeight={filter.label === "Location" ? "8rem" : "12rem"}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

