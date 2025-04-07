"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ShoppingCart, User, Menu, X } from "lucide-react"

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [activeMenu, setActiveMenu] = useState(null) // Start with no active menu

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && window.innerWidth < 768) {
        // Check if click is outside sidebar
        const sidebar = document.getElementById("sidebar")
        if (sidebar && !sidebar.contains(e.target)) {
          toggleSidebar()
        }
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen, toggleSidebar])

  const toggleMenu = (menuId) => {
    if (activeMenu === menuId) {
      setActiveMenu(null) // Close the menu if it's already open
    } else {
      setActiveMenu(menuId) // Open the menu if it's closed
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed md:static w-64 sm:w-56 bg-gray-900 text-white flex flex-col sidebar-shadow h-full z-30 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm">
              S
            </div>
            <span className="ml-2 text-sm font-medium">sdvsbraebq ltd</span>
          </div>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={toggleSidebar}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2 space-y-1">
            <li className="px-2">
              <a
                href="#"
                className="flex items-center w-full px-2 py-2 text-sm rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-gray-300">Get started</span>
              </a>
            </li>

            <li className="px-2">
              <button
                className="flex items-center w-full px-2 py-2 text-sm rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                onClick={() => toggleMenu("solo")}
              >
                <User className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">Solo</span>
                <ChevronDown
                  className={`w-4 h-4 ml-auto transition-transform ${activeMenu === "solo" ? "rotate-180" : ""}`}
                />
              </button>

              {activeMenu === "solo" && (
                <ul className="mt-1 ml-4 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Solo Option 1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Solo Option 2</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="mt-6 mb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">Workspaces</li>

            <li className="px-2">
              <button
                className={`flex items-center w-full px-2 py-2 text-sm rounded-md transition-all duration-200 ${activeMenu === "costs" ? "bg-gray-800 shadow-inner" : "hover:bg-gray-800 hover:shadow-inner"}`}
                onClick={() => toggleMenu("costs")}
              >
                <ShoppingCart className="w-5 h-5 mr-3 text-orange-500" />
                <span className={activeMenu === "costs" ? "text-white" : "text-gray-300"}>Costs</span>
                <ChevronDown
                  className={`w-4 h-4 ml-auto transition-transform ${activeMenu === "costs" ? "rotate-180" : ""}`}
                />
              </button>

              {activeMenu === "costs" && (
                <ul className="mt-1 ml-4 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Inbox</span>
                      <span className="ml-auto px-1.5 py-0.5 text-xs rounded-md bg-gray-700">1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Processing</span>
                      <span className="ml-auto px-1.5 py-0.5 text-xs rounded-md">0</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>To review</span>
                      <span className="ml-auto px-1.5 py-0.5 text-xs rounded-md bg-gray-700">1</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Ready</span>
                      <span className="ml-auto px-1.5 py-0.5 text-xs rounded-md">0</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Approvals</span>
                      <span className="ml-auto px-1.5 py-0.5 text-xs rounded-md">0</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-2 py-1.5 text-sm text-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 hover:shadow-inner"
                    >
                      <span>Archive</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center text-sm text-gray-400 hover:text-white">
            <Menu className="w-5 h-5 mr-2" />
            <span>Collapse menu</span>
          </button>
        </div>
      </aside>
    </>
  )
}

