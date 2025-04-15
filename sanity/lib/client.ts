import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // Always fetch fresh data directly from Sanity API
  perspective: 'published', // Always get the published version
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
})

// For preview functionality
export function getClient(preview = false) {
  const token = process.env.SANITY_API_TOKEN
  
  if (preview && token) {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
    })
  }
  
  return client
}
