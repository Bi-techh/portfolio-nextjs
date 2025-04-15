'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Project data
const projects = [
  {
    id: 1,
    title: 'Soulful Rebrand',
    category: 'BRANDING',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-201-min.png',
    slug: 'soulful-rebrand'
  },
  {
    id: 2,
    title: 'Datadash Product design',
    category: 'PRODUCT DESIGN',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-202-min.png',
    slug: 'datadash-product-design'
  },
  {
    id: 3,
    title: 'Maize Website Design',
    category: 'WEB DESIGN',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-203-min.png',
    slug: 'maize-website-design'
  },
  {
    id: 4,
    title: 'GorillaX Branding',
    category: 'BRANDING',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-204-min.png',
    slug: 'gorillax-branding'
  },
  {
    id: 5,
    title: 'Joggr Website Design',
    category: 'WEB DESIGN',
    imageSrc: '/images/image_processing20200129-19798-1k8ponz-2014-min.png',
    slug: 'joggr-website-design'
  }
];

export default function ProjectsShowcase() {
  const [animate, setAnimate] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to the next set of projects
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to scroll to the previous set of projects
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Add animation
  useEffect(() => {
    const animTimer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => {
      clearTimeout(animTimer);
    };
  }, []);

  return (
    <section className="projects-section">
      <div className="wrapper">
        <div className="projects-heading">
          <div className="projects-heading-content">
            <div 
              className="projects-subtext"
              style={{
                opacity: animate ? 1 : 0,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transform: animate ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h6>PROJECTS</h6>
            </div>
            <div 
              className="projects-title"
              style={{
                opacity: animate ? 1 : 0,
                transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                transform: animate ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <h2>I bring results. <br/>My clients are proof.</h2>
            </div>
          </div>
          <Link 
            href="/projects" 
            className="view-all-button"
            style={{
              opacity: animate ? 1 : 0,
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
              transform: animate ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="button-text">View all projects</div>
          </Link>
        </div>
      
        <div 
          className="projects-slider-container"
          style={{
            opacity: animate ? 1 : 0,
            transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s',
            transform: animate ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="projects-slider" ref={sliderRef}>
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image 
                    src={project.imageSrc} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="project-image"
                  />
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <Link href={`/projects/${project.slug}`} className="view-project-link">
                    View Project <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-navigation">
            <button 
              className="nav-button prev"
              onClick={scrollLeft}
              aria-label="Previous projects"
            >
              <span>←</span>
            </button>
            <button 
              className="nav-button next"
              onClick={scrollRight}
              aria-label="Next projects"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
