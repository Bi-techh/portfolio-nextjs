'use client'

import { useMemo } from 'react'
import { LiveQueryProvider } from '@sanity/preview-kit'
import { client } from '@/lib/sanity-client'

interface PreviewProviderProps {
  children: React.ReactNode
  token?: string
}

export default function PreviewProvider({ 
  children,
  token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN
}: PreviewProviderProps) {
  const liveQueryClient = useMemo(() => {
    if (!token) {
      throw new Error('Missing preview token')
    }
    
    return client.withConfig({
      token,
      perspective: 'previewDrafts',
      useCdn: false,
      stega: {
        enabled: true,
        studioUrl: '/sun',
      },
    })
  }, [token])
  
  return (
    <LiveQueryProvider client={liveQueryClient}>
      {children}
    </LiveQueryProvider>
  )
}
