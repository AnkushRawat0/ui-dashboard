"use client"

import { useState } from "react"
import { ChevronDown, Flag, FileText } from "lucide-react"

export default function DocumentsTable({ selectedItems, setSelectedItems }) {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      status: "Edited",
      date: "04 Mar 2024",
      supplier: "Sage Publications",
      category: "Other",
      total: "GBP 81.25",
      tax: "GBP 0.00",
      taxRate: "Extracted amount",
      match: "",
      flagged: true,
    },
    {
      id: 2,
      status: "Processed",
      date: "28 Feb 2024",
      supplier: "Office Supplies Ltd",
      category: "Stationery",
      total: "GBP 145.50",
      tax: "GBP 24.25",
      taxRate: "20%",
      match: "Matched",
      flagged: false,
    },
  ])

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(documents.map((doc) => doc.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  // Mobile card view for each document
  const MobileDocumentCard = ({ doc }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            checked={selectedItems.includes(doc.id)}
            onChange={() => handleSelectItem(doc.id)}
          />
          <div className="flex items-center gap-2">
            {doc.flagged && <Flag className="w-5 h-5 text-gray-400" />}
            <FileText className="w-5 h-5 text-gray-400" />
            <span
              className={`px-2 py-1 text-xs font-medium rounded shadow-sm ${
                doc.status === "Edited" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
              }`}
            >
              {doc.status}
            </span>
          </div>
        </div>
        <span className="text-sm text-gray-500">{doc.date}</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Supplier</span>
          <span className="text-sm text-gray-700">{doc.supplier}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Category</span>
          <div className="flex items-center text-sm text-gray-700">
            <span>{doc.category}</span>
            <div className="ml-2 flex items-center flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-gray-200 shadow-sm"></div>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Total</span>
          <span className="text-sm text-gray-700">{doc.total}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Tax</span>
          <span className="text-sm text-gray-700">{doc.tax}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Tax rate</span>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            {doc.taxRate}
            <ChevronDown className="w-3 h-3 text-gray-500 flex-shrink-0" />
          </div>
        </div>

        {doc.match && (
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">Match</span>
            <span className="text-sm text-gray-700">{doc.match}</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
              onChange={handleSelectAll}
              checked={selectedItems.length === documents.length && documents.length > 0}
            />
            <span className="text-sm font-medium text-gray-500">Select all</span>
          </div>
          <span className="text-xs text-gray-500">
            Showing {documents.length} of {documents.length} items
          </span>
        </div>

        {documents.map((doc) => (
          <MobileDocumentCard key={doc.id} doc={doc} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <colgroup>
              <col className="w-16" />
              <col className="w-[15%]" />
              <col className="w-[12%]" />
              <col className="w-[15%]" />
              <col className="w-[12%]" />
              <col className="w-[12%]" />
              <col className="w-[10%]" />
              <col className="w-[12%]" />
              <col className="w-[12%]" />
            </colgroup>
            <thead className="bg-white shadow-sm">
              <tr>
                <th scope="col" className="px-6 py-3 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={handleSelectAll}
                      checked={selectedItems.length === documents.length && documents.length > 0}
                    />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    Date
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="truncate">Supplier</span>
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="truncate">Category</span>
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    Total
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Tax
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    Tax rate
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Match
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-gray-50 transition-all duration-200 relative shadow-sm hover:shadow-md"
                >
                  <td className="px-6 py-4 whitespace-nowrap align-middle">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedItems.includes(doc.id)}
                        onChange={() => handleSelectItem(doc.id)}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap align-middle">
                    <div className="flex items-center gap-2">
                      {doc.flagged && <Flag className="w-5 h-5 text-gray-400" />}
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded shadow-sm ${
                          doc.status === "Edited" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 align-middle">{doc.date}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 align-middle min-w-[180px]">
                    <div className="truncate">{doc.supplier}</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap align-middle min-w-[150px]">
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="truncate">{doc.category}</span>
                      <div className="ml-2 flex items-center flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-gray-200 shadow-sm"></div>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 align-middle">{doc.total}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 align-middle">{doc.tax}</td>
                  <td className="px-4 py-4 whitespace-nowrap align-middle">
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      {doc.taxRate}
                      <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 align-middle">{doc.match}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 bg-white border-t border-gray-200 text-xs text-gray-500 text-right">
          Showing {documents.length} of {documents.length} items
        </div>
      </div>
    </>
  )
}

