import React from 'react'
import { definePlugin } from 'sanity'

// Create a simple React component for the preview button
const PreviewButton = () => {
  const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
  
  const handleClick = () => {
    window.open(previewUrl, '_blank')
  }
  
  return (
    <button
      onClick={handleClick}
      style={{
        padding: '8px 12px',
        background: '#2276FC',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '14px',
        fontWeight: 500,
        margin: '0 8px'
      }}
    >
      <span style={{ fontSize: '16px' }}>👁️</span>
      <span>Preview</span>
    </button>
  )
}

// Create a plugin that adds the preview button to the navbar
export const livePreviewPlugin = definePlugin(() => {
  return {
    name: 'sanity-plugin-live-preview',
    studio: {
      components: {
        navbar: {
          children: (props: { renderDefault: (props: any) => React.ReactNode }) => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {props.renderDefault(props)}
                <PreviewButton />
              </div>
            )
          }
        }
      }
    }
  }
})
