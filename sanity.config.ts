'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\sun\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {codeInput} from '@sanity/code-input'
import {presentationTool} from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

// Define document types for TypeScript
interface SanityDocument {
  _type: string;
  slug?: {
    current: string;
  };
  [key: string]: any;
}

export default defineConfig({
  basePath: '/sun',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
      structure
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    codeInput(),
    // Presentation tool for live preview of content
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/preview',
        },
      },
    }),
  ],
  document: {
    // For singleton documents, filter out actions that are not needed
    actions: (prev, context) => {
      // Check if the document is a singleton (has a specific type)
      const singletonTypes = [
        'hero', 
        'navbar', 
        'services', 
        'trustedBy', 
        'about', 
        'experience', 
        'testimonials', 
        'contact', 
        'footer', 
        'projectsShowcase', 
        'blogShowcase', 
        'siteSettings'
      ];
      
      // If it's a singleton, remove the "duplicate" and "delete" actions
      if (context.schemaType && singletonTypes.includes(context.schemaType)) {
        return prev.filter(({action}) => action && !['delete', 'duplicate'].includes(action));
      }
      
      return prev;
    },
  },
})
