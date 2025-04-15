'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerHeadingRef = useRef<HTMLHeadingElement>(null);

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

    if (footerHeadingRef.current) {
      observer.observe(footerHeadingRef.current);
    }

    return () => {
      if (footerHeadingRef.current) {
        observer.unobserve(footerHeadingRef.current);
      }
    };
  }, []);

  return (
    <footer id="Lets-Talk" className="bg-[#000000] text-white py-20">
      <div className="wrapper footer">
        <div className="text-center mb-16">
          <h2 
            ref={footerHeadingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 opacity-0 transition-opacity duration-700"
          >
            Ready to make something kickass?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center text-xl hover:text-primary-purple transition-colors duration-300"
          >
            <span className="mr-2">Let's talk now</span>
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              <Image src="/images/vector-2-1.svg" alt="Arrow" width={16} height={16} className="invert" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image src="/images/white-20logo.svg" alt="Portfolio Logo" width={203} height={28} className="mb-6" />
            <p className="text-gray-400 mb-6">
              I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6">Pages</h5>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/#About" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/#Services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6">CMS</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Style Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Licenses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Password</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">404</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xl font-bold mb-6">Contact</h5>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <div className="mr-3">
                  <Image src="/images/vector-5.svg" alt="Email" width={20} height={20} className="invert" />
                </div>
                <a href="mailto:hello@portfolio.com" className="hover:text-white transition-colors duration-300">hello@portfolio.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <div className="mr-3">
                  <Image src="/images/vector-6.svg" alt="Phone" width={20} height={20} className="invert" />
                </div>
                <a href="tel:+491234567890" className="hover:text-white transition-colors duration-300">+49 123 456 7890</a>
              </li>
              <li className="flex items-start text-gray-400">
                <div className="mr-3 mt-1">
                  <Image src="/images/vector-7.svg" alt="Location" width={20} height={20} className="invert" />
                </div>
                <span>Kreuzbergstraße 30, 10965 Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <p> {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
