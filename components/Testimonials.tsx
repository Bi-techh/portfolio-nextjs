'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

type TestimonialData = {
  id: number;
  name: string;
  position: string;
  content: string;
  imageSrc: string;
};

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: 'John Frankin',
    position: 'Founder, Double Bunch',
    content: 'Jade helped us build a software so intuitive that it didn\'t need a walkthrough. He solved complex problems with brilliant design.',
    imageSrc: '/images/image-1-compressed.jpg'
  },
  {
    id: 2,
    name: 'Jennifer Musk',
    position: 'Project Manager@ Microsoft',
    content: 'This is unbelievable. After using Testiminial Generator my buisness skyrocketed!',
    imageSrc: '/images/jake-nackos-if9tk5uy-ki-unsplash-2012-min.png'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.3
      }
    }
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  // Arrow hover animation
  const arrowHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="testimonial-section py-24 md:py-32" ref={sectionRef} id="testimonials">
      <div className="wrapper testimonial-headings max-w-6xl mx-auto px-4">
        <motion.div 
          className="testimonial-heading-subtext-wrapper mb-2"
          initial="hidden"
          animate={controls}
          variants={headingVariants}
          data-w-id="ec5c2ec3-9c26-8ea5-6cad-b5b8c3f28bab"
        >
          <h6 className="text-lg font-semibold">Testimonials</h6>
        </motion.div>
        <motion.div 
          className="testimonial-heading-wrapper mb-16"
          initial="hidden"
          animate={controls}
          variants={headingVariants}
          data-w-id="d394d1cd-15ce-e104-29aa-3600fcf0b12f"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Word on the street</h2>
        </motion.div>
      </div>
      
      <motion.div 
        className="wrapper testimonial-down max-w-6xl mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={contentVariants}
      >
        <div className="testimonial-slider relative" data-delay="4000" data-animation="outin">
          <div className="testimonial-mask overflow-hidden w-slider-mask">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-slide w-slide"
              >
                <div className="testimonial-container md:flex gap-8 items-center">
                  <motion.div 
                    className="testimonial-image-wrapper relative w-full md:w-1/2 mb-8 md:mb-0 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={testimonials[activeIndex].imageSrc} 
                      alt={testimonials[activeIndex].name}
                      width={485}
                      height={485}
                      className="w-full h-auto object-cover"
                    />
                    <div className="testimonial-slider-image-cover absolute inset-0 bg-black bg-opacity-10"></div>
                  </motion.div>
                  <div className="testimonial-content w-full md:w-1/2">
                    <motion.div 
                      className="testimonial-quote-icon-wrapper mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Image 
                        src="/images/group-2058.svg" 
                        width={40} 
                        height={40} 
                        alt="Quote icon" 
                        className="image contain"
                      />
                    </motion.div>
                    <motion.div 
                      className="testimonial-content-wrapper mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="testimonial-content-text text-2xl md:text-3xl font-medium leading-relaxed">
                        {testimonials[activeIndex].content}
                      </h3>
                    </motion.div>
                    <motion.div 
                      className="testimonial-name-and-position-wrapper"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <div className="testimonial-name-wrapper">
                        <div className="text-block testimonial-name text-xl font-bold mb-1">{testimonials[activeIndex].name}</div>
                        <div className="text-block text-gray-600">{testimonials[activeIndex].position}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center items-center mt-12 space-x-4">
            <div className="testimonial-arrow left w-slider-arrow-left">
              <motion.div 
                className="testimonial-arrow-icon-wrapper w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
                onClick={prevTestimonial}
                variants={arrowHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/images/vector-1-1.svg" 
                  width={12} 
                  height={12} 
                  alt="Left arrow" 
                  className="image contain"
                />
              </motion.div>
            </div>
            
            <div className="slide-nav w-slider-nav w-round flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="testimonial-arrow right w-slider-arrow-right">
              <motion.div 
                className="testimonial-arrow-icon-wrapper w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
                onClick={nextTestimonial}
                variants={arrowHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/images/vector-5.svg" 
                  width={12} 
                  height={12} 
                  alt="Right arrow" 
                  className="image contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
