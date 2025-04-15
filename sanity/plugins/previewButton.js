import { definePlugin } from 'sanity'

export const previewButton = definePlugin(() => {
  return {
    name: 'preview-button-plugin',
    // This component will run when the studio is initialized
    studio: {
      components: {
        layout: {
          // Called after the studio layout is rendered
          'on:afterRender': () => {
            try {
              // Check if button already exists to prevent duplicates
              if (document.getElementById('sanity-preview-button')) {
                return
              }
              
              // Create preview button
              const button = document.createElement('button')
              button.id = 'sanity-preview-button'
              button.textContent = '👁️ Preview'
              button.style.position = 'fixed'
              button.style.bottom = '16px'
              button.style.right = '16px'
              button.style.zIndex = '9999'
              button.style.padding = '8px 16px'
              button.style.backgroundColor = '#2276FC'
              button.style.color = 'white'
              button.style.border = 'none'
              button.style.borderRadius = '4px'
              button.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)'
              button.style.cursor = 'pointer'
              button.style.fontWeight = 'bold'
              
              // Open preview in new tab
              button.addEventListener('click', () => {
                window.open(process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000', '_blank')
              })
              
              // Add to document
              document.body.appendChild(button)
            } catch (error) {
              console.error('Error adding preview button:', error)
            }
          }
        }
      }
    }
  }
})
