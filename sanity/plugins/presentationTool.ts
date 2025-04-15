import { definePlugin } from 'sanity'
import { FiEye } from 'react-icons/fi'
import React from 'react'

interface PresentationToolConfig {
  previewUrl?: string
}

interface NavbarProps {
  renderDefault: (props: any) => React.ReactNode
  layout: string
  [key: string]: any
}

export const presentationTool = definePlugin<PresentationToolConfig>((config = {}) => {
  const { previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000' } = config

  return {
    name: 'sanity-plugin-presentation-tool',
    studio: {
      components: {
        navbar: (props: NavbarProps) => {
          const { renderDefault, layout } = props
          
          if (layout !== 'default') {
            return renderDefault(props)
          }
          
          return (
            React.createElement(React.Fragment, null,
              renderDefault(props),
              React.createElement('div', { style: { padding: '0 1em' } },
                React.createElement(PreviewButton, { previewUrl })
              )
            )
          )
        }
      }
    }
  }
})

function PreviewButton({ previewUrl }: { previewUrl: string }) {
  const handleClick = () => {
    // Get the current document ID and type from the URL
    const url = new URL(window.location.href)
    const pathSegments = url.pathname.split('/')
    const documentId = pathSegments[pathSegments.length - 1]
    const documentType = pathSegments[pathSegments.length - 2]
    
    if (documentId && documentType) {
      // Open preview in new tab
      const previewPath = `${previewUrl}/api/preview?id=${documentId}&type=${documentType}`
      window.open(previewPath, '_blank')
    } else {
      // Fallback to just opening the site
      window.open(previewUrl, '_blank')
    }
  }
  
  return React.createElement('button', {
    onClick: handleClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5em',
      padding: '0.5em 0.75em',
      backgroundColor: '#2276FC',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    }
  }, 
    React.createElement(FiEye),
    React.createElement('span', null, 'Preview')
  )
}
