"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import DocumentsTable from "@/components/documents-table"
import ActionBar from "@/components/action-bar"
import SearchBar from "@/components/search-bar"

export default function Dashboard() {
  const [selectedItems, setSelectedItems] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50 shadow-md sticky top-16 z-10">
            <div className="max-w-full mx-auto px-3 sm:px-6 py-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:h-10">
                <ActionBar selectedCount={selectedItems.length} />
                <div className="hidden sm:block h-6 w-px bg-gray-300 mx-4"></div>
                <SearchBar />
              </div>
            </div>
          </div>
          <main className="flex-1 overflow-auto bg-gray-50">
            <div className="max-w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
              <DocumentsTable selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

