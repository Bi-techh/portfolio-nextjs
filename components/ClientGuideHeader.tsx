'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClientGuideHeader() {
  const [showFullGuide, setShowFullGuide] = useState(false);

  // Function to safely scroll to an element by ID
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ 
        top: element.offsetTop - 100, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md mb-8 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Website Content Manager</h2>
          <button
            onClick={() => setShowFullGuide(!showFullGuide)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            {showFullGuide ? 'Hide Guide' : 'Show Full Guide'}
            <svg
              className={`ml-1 w-5 h-5 transition-transform duration-200 ${
                showFullGuide ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-600">
            This guide shows you how to edit all the content on your website through Sanity Studio - 
            a user-friendly content management system that gives you complete control over your website.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/sun"
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
            Open Sanity Studio
          </Link>
          
          <button
            onClick={() => scrollToElement('sections-list')}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            View Editable Sections
          </button>
        </div>
      </div>

      {/* Expanded guide content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showFullGuide ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">How to Edit Your Website Content</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-gray-800">Step 1: Access Sanity Studio</h4>
              <p className="text-gray-600 mb-3">
                Click the "Open Sanity Studio" button above to access your content management system.
                You may need to log in with your credentials.
              </p>
              <div className="bg-white p-3 border border-gray-200 rounded-md">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>
                    <strong>Tip:</strong> Bookmark the Sanity Studio URL for quick access in the future.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-gray-800">Step 2: Find the Section to Edit</h4>
              <p className="text-gray-600 mb-3">
                In Sanity Studio, you'll see all the sections of your website organized in the left sidebar.
                Click on the section you want to edit.
              </p>
              <div className="bg-white p-3 border border-gray-200 rounded-md">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>
                    <strong>Tip:</strong> You can also use the "Edit" buttons on your website when in preview mode.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-gray-800">Step 3: Make Your Changes</h4>
              <p className="text-gray-600 mb-3">
                Edit the content using the user-friendly form fields. You can change text, images, links, and more.
                Your changes are saved automatically as drafts.
              </p>
              <div className="bg-white p-3 border border-gray-200 rounded-md">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>
                    <strong>Tip:</strong> Use the "Preview" button to see how your changes look before publishing.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-gray-800">Step 4: Publish Your Changes</h4>
              <p className="text-gray-600 mb-3">
                When you're happy with your changes, click the "Publish" button to make them live on your website.
                You can always revert to previous versions if needed.
              </p>
              <div className="bg-white p-3 border border-gray-200 rounded-md">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>
                    <strong>Tip:</strong> Changes may take a few minutes to appear on your live website.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-medium text-lg mb-2 text-blue-800">Need Help?</h4>
            <p className="text-blue-700">
              If you have any questions or need assistance with editing your website content,
              please contact your website administrator or refer to the detailed documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
