// A simple preview tool that doesn't use JSX or complex TypeScript
import { definePlugin } from 'sanity'

// Simple plugin that adds a preview button to the Sanity Studio
export const simplePreviewTool = definePlugin((config) => {
  const previewUrl = config?.previewUrl || process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
  
  return {
    name: 'simple-preview-tool',
    component: (props) => {
      // Return the default component
      return props.renderDefault(props)
    },
    tools: [
      {
        name: 'preview',
        title: 'Preview',
        icon: () => {
          // Simple eye icon as a string
          return '👁️'
        },
        component: () => {
          // This will never be rendered, but we need to return something
          return {
            type: 'div',
            props: {
              children: 'Preview'
            }
          }
        },
        options: {
          previewUrl
        },
        // This function runs when the tool is selected
        onAction: () => {
          window.open(previewUrl, '_blank')
        }
      }
    ]
  }
})
