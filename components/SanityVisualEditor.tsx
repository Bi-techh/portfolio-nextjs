'use client';

import React from 'react';
import { ReactNode } from 'react';

interface SanityVisualEditorProps {
  documentType: string;
  documentId?: string;
  children: ReactNode;
}

export default function SanityVisualEditor({ children }: SanityVisualEditorProps) {
  // In production, just render the children without any edit UI
  if (process.env.NODE_ENV === 'production') {
    return <>{children}</>;
  }
  
  // In development, render the edit UI (this won't be visible in production)
  return <>{children}</>;
}
