import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Script from 'next/script';
import VisualEditing from './VisualEditing';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-website-domain.com'),
  title: {
    template: '%s | Portfolio Creator',
    default: 'Portfolio Creator - Professional Portfolio Website'
  },
  description: 'Folio helps you build a compelling portfolio website, without spending ages getting to launch. Bring personality to your portfolio with a template that keeps your prospects reading.',
  keywords: ['portfolio', 'design', 'web development', 'ui/ux', 'professional'],
  authors: [{ name: 'Your Name', url: 'https://your-website-domain.com' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://your-website-domain.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-website-domain.com',
    title: 'Portfolio Creator - Professional Portfolio Website',
    description: 'Folio helps you build a compelling portfolio website, without spending ages getting to launch. Bring personality to your portfolio with a template that keeps your prospects reading.',
    images: [
      {
        url: '/images/new-20og-min.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Creator',
      }
    ],
    siteName: 'Portfolio Creator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Creator - Professional Portfolio Website',
    description: 'Folio helps you build a compelling portfolio website, without spending ages getting to launch. Bring personality to your portfolio with a template that keeps your prospects reading.',
    images: ['/images/new-20og-min.png'],
    creator: '@yourhandle',
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/images/app-icon.png' },
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
};

// Structured data for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Portfolio Creator',
  url: 'https://your-website-domain.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://your-website-domain.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-white">
        {children}
        {/* Visual editing component will be loaded client-side only */}
        <VisualEditing />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
