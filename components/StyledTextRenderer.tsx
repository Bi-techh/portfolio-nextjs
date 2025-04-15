'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

// Define types for text styling
interface TextStyle {
  textColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface StyledTextProps {
  value: any;
  className?: string;
}

// Component for rendering styled text from Sanity
export const StyledTextRenderer = ({ value, className = '' }: StyledTextProps) => {
  if (!value) {
    return null;
  }

  // Custom components for the PortableText renderer
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null;
        }
        
        // Parse Sanity image URL
        const imageRef = value.asset._ref;
        const [_, id, format] = imageRef.split('-');
        const imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${format}`;
        
        return (
          <div className="relative w-full h-64 md:h-96 my-6 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt || 'Image'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {value.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = value.href.startsWith('/') ? undefined : 'noreferrer noopener';
        const target = value.openInNewTab ? '_blank' : undefined;
        return (
          <Link 
            href={value.href} 
            rel={rel} 
            target={target} 
            className="text-blue-600 hover:underline"
          >
            {children}
          </Link>
        );
      },
      textStyle: ({ children, value }: any) => {
        // Apply text styling from Sanity
        const style = value || {};
        const classes = [
          style.textColor,
          style.fontFamily,
          style.fontSize,
          style.fontWeight,
        ].filter(Boolean).join(' ');
        
        return <span className={classes}>{children}</span>;
      },
    },
    block: {
      // Custom renderers for different block styles
      h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
      normal: ({ children }: any) => <p className="my-4">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc ml-6 my-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
      number: ({ children }: any) => <li className="mb-1">{children}</li>,
    },
  };

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
};

// Helper component to apply text styling to simple text fields
export const StyledText = ({ 
  text, 
  style, 
  className = '',
  as: Component = 'p'
}: { 
  text: string; 
  style?: TextStyle; 
  className?: string;
  as?: React.ElementType;
}) => {
  if (!text) return null;
  
  // Combine style classes
  const styleClasses = [
    style?.textColor,
    style?.fontFamily,
    style?.fontSize,
    style?.fontWeight,
    className
  ].filter(Boolean).join(' ');
  
  return <Component className={styleClasses}>{text}</Component>;
};

export default StyledTextRenderer;
