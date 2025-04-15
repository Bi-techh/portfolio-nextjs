import 'server-only'

import type { QueryParams } from '@sanity/client'
import { draftMode } from 'next/headers'

import { client } from './client'

export const token = process.env.SANITY_API_TOKEN

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
  fallback = null,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
  fallback?: QueryResponse | null
}): Promise<QueryResponse | null> {
  try {
    // Set a timeout to prevent hanging requests - increased to 15 seconds
    const timeoutPromise = new Promise<null>((_, reject) => {
      setTimeout(() => reject(new Error('Sanity fetch timeout')), 15000);
    });
    
    // Log the query and tags for debugging
    console.log(`Fetching Sanity data with tags: ${tags.join(', ')}`);
    
    const fetchPromise = client.fetch<QueryResponse>(query, params, {
      cache: 'no-store', // Always disable caching to fetch fresh data
      next: { 
        tags, // Apply tags for targeted revalidation
      },
    });
    
    // Race between the fetch and the timeout
    const result = await Promise.race([fetchPromise, timeoutPromise]) as QueryResponse;
    console.log(`Successfully fetched data for tags: ${tags.join(', ')}`);
    return result;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    // Return fallback data when fetch fails
    if (fallback) {
      console.log('Using fallback data for query:', query.substring(0, 50) + '...');
      return fallback;
    }
    return null;
  }
}
