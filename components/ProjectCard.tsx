'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  slug: string;
  index: number;
}

export default function ProjectCard({ title, category, imageSrc, slug, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="opacity-0 transition-opacity duration-700"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link href={`/projects/${slug}`} className="block group">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg mb-6">
          <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-purple scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 z-20"></div>
          
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="relative">
          <div className="mb-2">
            <h6 className="text-sm font-semibold text-paragraph">{category}</h6>
          </div>
          
          <div className="mb-4">
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          
          <div className="flex items-center text-primary-purple">
            <span className="mr-2">View Project</span>
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              <Image src="/images/vector-1.svg" alt="Arrow" width={16} height={16} />
            </div>
          </div>
          
          <div className="absolute right-0 bottom-0 h-1 w-0 bg-primary-purple group-hover:w-full transition-all duration-500 origin-left"></div>
        </div>
      </Link>
    </div>
  );
}
