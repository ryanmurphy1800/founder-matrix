import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

type SearchableDropdownProps = {
  options: string[]
  selectedOptions: string[]
  onChange: (option: string) => void
  placeholder: string
  maxHeight?: string
}

export default function SearchableDropdown({
  options,
  selectedOptions,
  onChange,
  placeholder,
  maxHeight = "12rem",
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 text-left bg-black border border-white text-white flex justify-between items-center"
      >
        <span>{selectedOptions.length > 0 ? `${selectedOptions.length} selected` : placeholder}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div
          className="absolute z-10 w-full mt-1 bg-black border border-white"
          style={{ maxHeight: maxHeight, overflowY: "auto" }}
        >
          <div className="p-2 border-b border-white">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 bg-black text-white border border-white"
              />
              <Search size={18} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </div>
          {filteredOptions.map((option) => (
            <label key={option} className="flex items-center p-2 hover:bg-gray-800 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => onChange(option)}
                className="form-checkbox mr-2"
              />
              <span className="terminal-text text-sm">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

