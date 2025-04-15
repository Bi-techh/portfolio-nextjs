'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the Navbar data type based on our Sanity schema
interface NavbarProps {
  data: {
    logoUrl?: string;
    logoText?: string;
    menuItems?: Array<{
      text: string;
      url: string;
      isButton?: boolean;
      openInNewTab?: boolean;
      submenu?: Array<{
        text: string;
        url: string;
        openInNewTab?: boolean;
      }>;
    }>;
    ctaButton?: {
      text: string;
      url: string;
      openInNewTab?: boolean;
    };
  };
}

// Define the menu item interface to match our schema
interface MenuItem {
  text: string;
  url: string;
  isButton?: boolean;
  openInNewTab?: boolean;
  submenu?: Array<{
    text: string;
    url: string;
    openInNewTab?: boolean;
  }>;
}

// Define the CTA button interface
interface CtaButton {
  text: string;
  url: string;
  openInNewTab?: boolean;
}

// Default navbar content to use when data is not available
const defaultNavbarContent = {
  logoText: 'Portfolio Creator',
  menuItems: [
    { text: 'Home', url: '/', isButton: false, openInNewTab: false },
    { text: 'About', url: '/#about', isButton: false, openInNewTab: false },
    { text: 'Services', url: '/#services', isButton: false, openInNewTab: false },
    { text: 'Projects', url: '/projects', isButton: false, openInNewTab: false }
  ] as MenuItem[],
  ctaButton: {
    text: 'Contact',
    url: '/contact',
    openInNewTab: false
  } as CtaButton
};

export default function Navbar({ data = {} }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Merge Sanity data with defaults for any missing fields
  const navbarContent = {
    ...defaultNavbarContent,
    ...data,
    // Ensure menuItems is always an array
    menuItems: data.menuItems?.length ? data.menuItems : defaultNavbarContent.menuItems,
    // Ensure ctaButton exists
    ctaButton: data.ctaButton || defaultNavbarContent.ctaButton
  };

  const { logoUrl, logoText, menuItems = [], ctaButton } = navbarContent;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              {logoUrl ? (
                <Image 
                  src={logoUrl} 
                  alt={logoText || "Portfolio Logo"} 
                  width={203} 
                  height={28} 
                  className={`h-auto ${isScrolled ? '' : 'invert'}`} 
                />
              ) : (
                <span className="text-black">{logoText || "Portfolio Creator"}</span>
              )}
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.url || '/'}
                  target={item.openInNewTab ? "_blank" : undefined}
                  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  className={item.isButton 
                    ? "inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-purple to-primary-red hover:from-primary-red hover:to-primary-purple transition-all duration-300"
                    : "text-gray-900 hover:text-primary-purple transition-colors duration-300"
                  }
                >
                  {item.text}
                </Link>
              ))}
              
              {ctaButton && ctaButton.url && (
                <Link 
                  href={ctaButton.url}
                  target={ctaButton.openInNewTab ? "_blank" : undefined}
                  rel={ctaButton.openInNewTab ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-purple to-primary-red hover:from-primary-red hover:to-primary-purple transition-all duration-300"
                >
                  {ctaButton.text}
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-purple focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems && menuItems.length > 0 && menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.url || '/'}
              target={item.openInNewTab ? "_blank" : undefined}
              rel={item.openInNewTab ? "noopener noreferrer" : undefined}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          
          {ctaButton && ctaButton.url && (
            <Link
              href={ctaButton.url}
              target={ctaButton.openInNewTab ? "_blank" : undefined}
              rel={ctaButton.openInNewTab ? "noopener noreferrer" : undefined}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-primary-purple to-primary-red hover:from-primary-red hover:to-primary-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {ctaButton.text}
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
