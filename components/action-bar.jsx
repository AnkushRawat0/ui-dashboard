import { ChevronDown } from "lucide-react"

export default function ActionBar({ selectedCount }) {
  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin">
      <button className="inline-flex items-center justify-center h-9 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 whitespace-nowrap">
        Export all
      </button>
      <button className="inline-flex items-center justify-center h-9 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 whitespace-nowrap">
        Archive
      </button>
      <button className="inline-flex items-center justify-center h-9 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 whitespace-nowrap">
        Add to expense claim
      </button>
      <div className="relative">
        <button className="inline-flex items-center justify-center h-9 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 whitespace-nowrap">
          Move to
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </div>
      <div className="relative">
        <button className="inline-flex items-center justify-center h-9 px-3 sm:px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 whitespace-nowrap">
          Tools
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

