import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Only if you want to update content
})

// Helper function for generating image URLs with the Sanity Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Types for our content
export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  mainImage?: any
  categories?: any[]
  technologies?: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  publishedAt?: string
}

export interface Category {
  _id: string
  title: string
  description?: string
}

export interface About {
  _id: string
  name: string
  role: string
  profileImage?: any
  shortBio: string
  longBio?: any[]
  email?: string
  phone?: string
  location?: string
  resumeURL?: string
  socialLinks?: any[]
}

export interface Social {
  _id: string
  platform: string
  url: string
  icon?: string
}
