'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TrustedBy() {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="trusted-by-section py-16 md:py-20">
      <div className="wrapper">
        <motion.div 
          className="trusted-by-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            className="trusted-by-heading text-center mb-12"
            variants={itemVariants}
          >
            <p className="text-lg text-paragraph font-medium">Trusted by</p>
          </motion.div>
          
          <motion.div 
            className="trusted-by-logos grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center justify-items-center"
            variants={containerVariants}
          >
            {[
              { src: "/images/group-20334.png", alt: "Webflow" },
              { src: "/images/group-20333.png", alt: "Figma" },
              { src: "/images/group-20335.png", alt: "Framer" },
              { src: "/images/group-20336.png", alt: "Sketch" }
            ].map((logo, index) => (
              <motion.div 
                key={index}
                className="trusted-by-logo-wrapper flex items-center justify-center w-full max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src={logo.src} 
                  alt={`${logo.alt} Logo`} 
                  width={150} 
                  height={50} 
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 120px, 150px"
                  quality={90}
                  onLoad={() => setIsLoaded(true)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
