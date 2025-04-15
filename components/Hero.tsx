'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StyledText } from './StyledTextRenderer';
import { CSSProperties } from 'react';

// Define the Hero data type based on our Sanity schema
interface HeroProps {
  data: {
    title?: string;
    titleStyle?: {
      textColor?: string;
      fontFamily?: string;
      fontSize?: string;
      fontWeight?: string;
      lineHeight?: number;
      letterSpacing?: number;
      textAlign?: string;
      marginTop?: number;
      marginBottom?: number;
    };
    subtitle?: string;
    subtitleStyle?: {
      textColor?: string;
      fontFamily?: string;
      fontSize?: string;
      fontWeight?: string;
      lineHeight?: number;
      letterSpacing?: number;
      textAlign?: string;
      marginTop?: number;
      marginBottom?: number;
    };
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    profileImage?: {
      asset?: {
        _ref: string;
        url?: string;
      };
    };
  };
}

// Default content in case Sanity data isn't available yet
const defaultHeroContent = {
  title: "I design products that delight and inspire people.",
  subtitle: "Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.",
  ctaText: "Book a call",
  ctaLink: "/contact",
  secondaryCtaText: "Download CV",
  secondaryCtaLink: "https://example.com/cv.pdf",
};

export default function Hero({ data = {} }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Prioritize data from Sanity, only use defaults if fields are missing
  const heroContent = {
    title: data.title || defaultHeroContent.title,
    titleStyle: data.titleStyle || {},
    subtitle: data.subtitle || defaultHeroContent.subtitle,
    subtitleStyle: data.subtitleStyle || {},
    ctaText: data.ctaText || defaultHeroContent.ctaText,
    ctaLink: data.ctaLink || defaultHeroContent.ctaLink,
    secondaryCtaText: data.secondaryCtaText || defaultHeroContent.secondaryCtaText,
    secondaryCtaLink: data.secondaryCtaLink || defaultHeroContent.secondaryCtaLink,
    profileImage: data.profileImage,
  };

  // Get profile image URL from Sanity if available - use direct URL if provided
  const profileImageUrl = heroContent.profileImage?.asset?.url 
    ? heroContent.profileImage.asset.url
    : heroContent.profileImage?.asset?._ref 
      ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ngkmh0ct'}/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'sun'}/${heroContent.profileImage.asset._ref
          .replace('image-', '')
          .replace('-jpg', '.jpg')
          .replace('-png', '.png')
          .replace('-webp', '.webp')
          .replace('-gif', '.gif')
          .replace('-jpeg', '.jpeg')}`
      : '/images/image-1-compressed.jpg';

  console.log('Hero Content:', heroContent);
  console.log('Profile Image URL:', profileImageUrl);

  // Split the title into parts for styling
  const titleParts = heroContent.title?.split(' ') || [];
  const firstPart = titleParts.slice(0, 2).join(' '); // First two words with gradient
  const secondPart = titleParts.slice(2).join(' '); // Rest of the title in black

  // Generate CSS styles from Sanity style objects
  const getTitleStyles = (): CSSProperties => {
    const { titleStyle } = heroContent;
    return {
      color: titleStyle?.textColor || 'inherit',
      fontFamily: titleStyle?.fontFamily || 'inherit',
      fontSize: titleStyle?.fontSize || 'inherit',
      fontWeight: titleStyle?.fontWeight || 'bold',
      lineHeight: titleStyle?.lineHeight !== undefined ? String(titleStyle.lineHeight) : '1.1',
      letterSpacing: titleStyle?.letterSpacing !== undefined ? `${titleStyle.letterSpacing}px` : 'normal',
      textAlign: (titleStyle?.textAlign as "left" | "center" | "right" | "justify") || 'left',
      marginTop: titleStyle?.marginTop !== undefined ? `${titleStyle.marginTop}px` : '0',
      marginBottom: titleStyle?.marginBottom !== undefined ? `${titleStyle.marginBottom}px` : '0',
    };
  };

  const getFirstPartStyles = (): CSSProperties => {
    // Inherit all styles from title but add gradient
    return {
      ...getTitleStyles(),
      backgroundImage: 'linear-gradient(to right, #9c6ade, #ed64a6, #f6ad55)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'inline-block',
    };
  };

  const getSecondPartStyles = (): CSSProperties => {
    // Inherit all styles from title
    const baseStyles = getTitleStyles();
    return {
      ...baseStyles,
      display: 'inline-block',
      marginTop: '0.5rem',
    };
  };

  const getSubtitleStyles = (): CSSProperties => {
    const { subtitleStyle } = heroContent;
    return {
      color: subtitleStyle?.textColor || '#4B5563',
      fontFamily: subtitleStyle?.fontFamily || 'inherit',
      fontSize: subtitleStyle?.fontSize || 'inherit',
      fontWeight: subtitleStyle?.fontWeight || 'normal',
      lineHeight: subtitleStyle?.lineHeight !== undefined ? String(subtitleStyle.lineHeight) : '1.5',
      letterSpacing: subtitleStyle?.letterSpacing !== undefined ? `${subtitleStyle.letterSpacing}px` : 'normal',
      textAlign: (subtitleStyle?.textAlign as "left" | "center" | "right" | "justify") || 'left',
      marginTop: subtitleStyle?.marginTop !== undefined ? `${subtitleStyle.marginTop}px` : '0',
      marginBottom: subtitleStyle?.marginBottom !== undefined ? `${subtitleStyle.marginBottom}px` : '0',
    };
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 1, 
        delay: 0.3, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with text content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            {/* Title with gradient text */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold">
                <span style={getFirstPartStyles()}>
                  {firstPart}
                </span>
                <br />
                <span style={getSecondPartStyles()}>{secondPart}</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
              className="mb-8"
            >
              <p className="text-lg" style={getSubtitleStyles()}>
                {heroContent.subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <Link
                href={heroContent.ctaLink || '/contact'}
                className="px-6 py-3 bg-black text-white font-medium rounded-md transition-colors hover:bg-gray-800"
              >
                {heroContent.ctaText || 'Book a call'}
              </Link>
              
              <Link
                href={heroContent.secondaryCtaLink || '#'}
                className="px-6 py-3 bg-transparent text-black font-medium rounded-md transition-colors hover:bg-gray-100 flex items-center"
              >
                {heroContent.secondaryCtaText || 'Download CV'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right side with profile image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-64 h-80 md:w-96 md:h-[500px]">
              <Image
                src={profileImageUrl}
                alt="Profile"
                fill
                priority
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 256px, 384px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
