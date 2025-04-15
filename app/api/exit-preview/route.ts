import { NextRequest, NextResponse } from 'next/server'
import { draftMode } from 'next/headers'

export async function GET(request: NextRequest) {
  // Disable draft mode by clearing the cookies
  const response = NextResponse.next()
  response.cookies.delete('__prerender_bypass')
  response.cookies.delete('__next_preview_data')
  
  // Get the path from the query string
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || '/'
  
  // Redirect back to the page that was being previewed
  return NextResponse.redirect(new URL(path, request.url))
}
