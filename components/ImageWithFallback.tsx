'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = 'https://via.placeholder.com/400x300?text=Image+Not+Found',
  alt,
  width,
  height,
  className,
  priority,
  quality,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt={alt || 'Image'}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }}
        {...rest}
      />
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
