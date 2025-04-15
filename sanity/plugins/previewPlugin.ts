import { definePlugin } from 'sanity'
import React from 'react'

// Define a simple preview tool
export const previewPlugin = definePlugin(() => {
  return {
    name: 'preview-plugin',
    studio: {
      components: {
        toolMenu: {
          // Add a custom item to the tool menu
          before: (props) => {
            const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
            
            // Function to handle click and open preview
            const handlePreviewClick = () => {
              window.open(previewUrl, '_blank')
            }
            
            // Return the default menu items followed by our custom button
            return props.renderDefault({
              ...props,
              onActionComplete: handlePreviewClick
            })
          }
        }
      }
    }
  }
})
