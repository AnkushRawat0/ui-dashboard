"use client"

import { ChevronDown, Bell, ChevronRight, Menu } from "lucide-react"

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-20">
      <div className="max-w-full mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-8">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center">
            <div className="hidden sm:grid place-items-center w-8 h-8 mr-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </div>
            <div className="text-orange-500 font-bold text-xl sm:text-2xl">Dext</div>
            <div className="mx-2 text-gray-700 font-medium hidden sm:block">|</div>
            <div className="text-gray-700 font-medium hidden sm:block">Prepare</div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center text-sm text-gray-500">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white shadow-sm">
                S
              </div>
              <span className="ml-2">sdvsbraebq ltd</span>
              <ChevronRight className="mx-2 w-4 h-4" />
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white shadow-sm">
                S
              </div>
              <span className="ml-2">My practice</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden sm:inline-flex items-center h-9 px-3 py-1.5 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200">
            <span className="mr-1">+</span> Add documents
          </button>
          <button className="relative p-1.5 rounded-full hover:bg-gray-100 transition-all duration-200">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="hidden md:inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resources
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 shadow-sm">
              A
            </div>
            <span className="ml-2 text-gray-700 hidden sm:inline">Ankush Rawat</span>
            <ChevronDown className="ml-1 w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

