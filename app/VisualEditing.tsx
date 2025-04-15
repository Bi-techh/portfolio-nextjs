'use client'

import { useEffect, useState } from 'react'
import { projectId, dataset } from '@/sanity/env'

export default function VisualEditingComponent() {
  const [isDraftMode, setIsDraftMode] = useState(false)

  useEffect(() => {
    // Check if we're in draft mode by looking for the cookie
    const cookies = document.cookie.split(';')
    const hasDraftModeCookie = cookies.some(cookie => 
      cookie.trim().startsWith('__prerender_bypass=') || 
      cookie.trim().startsWith('__next_preview_data=')
    )
    
    setIsDraftMode(hasDraftModeCookie)
    
    // Only load the visual editing script if we're in draft mode
    if (hasDraftModeCookie) {
      // Load the Sanity Visual Editing script dynamically
      const script = document.createElement('script')
      script.src = `https://studio-${projectId}.sanity.studio/static/visual-editing.js`
      script.dataset.projectId = projectId
      script.dataset.dataset = dataset
      script.async = true
      document.body.appendChild(script)
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [])

  // Add a small indicator when in draft mode
  if (isDraftMode) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: '#000',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 9999,
        opacity: 0.7
      }}>
        Sanity Editing Mode
      </div>
    )
  }

  return null
}
