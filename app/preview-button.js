'use client'

import React from 'react'

export default function PreviewButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-lg transition-colors"
      >
        <span className="mr-2">👁️</span>
        <span>Preview Website</span>
      </a>
    </div>
  )
}
