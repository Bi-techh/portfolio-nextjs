'use client';

import React from 'react';
import Link from 'next/link';

interface PreviewButtonProps {
  documentType?: string;
  documentId?: string;
  documentSlug?: string;
}

export default function PreviewButton({ 
  documentType, 
  documentId, 
  documentSlug 
}: PreviewButtonProps) {
  let previewUrl = '/';
  
  // Create specific preview URLs based on document type
  if (documentType === 'project' && documentSlug) {
    previewUrl = `/projects/${documentSlug}`;
  } else if (documentType === 'about') {
    previewUrl = '/about';
  }
  
  // Add preview mode parameter
  const fullPreviewUrl = `/api/preview?${documentId ? `id=${documentId}&` : ''}redirect=${encodeURIComponent(previewUrl)}`;
  
  return (
    <Link 
      href={fullPreviewUrl}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
      target="_blank"
    >
      <span role="img" aria-label="eye">👁️</span>
      <span>Preview</span>
    </Link>
  );
}
