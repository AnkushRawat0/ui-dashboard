import { Search, Filter, Settings, ChevronDown } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin">
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-9 pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow transition-all duration-200 focus:shadow-md bg-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      <button className="hidden sm:inline-flex items-center justify-center h-9 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 bg-white whitespace-nowrap">
        Advanced
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      <button className="inline-flex items-center justify-center h-9 p-2 text-gray-700 hover:bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 bg-white">
        <Filter className="w-5 h-5" />
      </button>
      <button className="inline-flex items-center justify-center h-9 p-2 text-gray-700 hover:bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 bg-white">
        <Settings className="w-5 h-5" />
      </button>
    </div>
  )
}

