'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
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

    const elements = [headingRef.current, formRef.current];
    
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // This would typically be an API call to your backend
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="Contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="wrapper">
        <div 
          className="text-center mb-16 opacity-0 transition-opacity duration-700"
          ref={headingRef}
        >
          <h6 className="text-lg font-semibold text-primary mb-4">Contact</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Fill up the form and I'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Location</h5>
                    <p className="text-gray-600">Berlin, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44657 3.0498 2.28271 3.30379 2.17053C3.55777 2.05835 3.83233 2.00024 4.10999 2H7.10999C7.59524 1.9952 8.06572 2.16706 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10999 3.72C9.23662 4.68007 9.47141 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Phone</h5>
                    <p className="text-gray-600">+49 (0) 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Email</h5>
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.42 10.96C8.47 10.24 13.67 10.26 20.96 13.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.94 7.5C17.75 11.42 13.9 13.33 2.5 14.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-lg shadow-sm opacity-0 transition-opacity duration-700"
            ref={formRef}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {isSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {errorMessage && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
