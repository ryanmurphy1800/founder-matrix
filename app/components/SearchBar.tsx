import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="SEARCH FOR CREATORS, COMPANIES, OR INDUSTRIES"
        className="w-full py-2 px-4 bg-black border border-white text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <Search className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}

