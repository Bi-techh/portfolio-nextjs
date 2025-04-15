'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PreviewBanner() {
  const pathname = usePathname()
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-2 flex justify-between items-center z-50">
      <div className="flex items-center">
        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        <span className="font-medium">Preview Mode</span>
      </div>
      <div className="flex space-x-4">
        <Link 
          href={`/api/exit-preview?path=${pathname}`}
          className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition-colors"
        >
          Exit Preview
        </Link>
      </div>
    </div>
  )
}
