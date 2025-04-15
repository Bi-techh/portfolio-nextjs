'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const serviceItems = [
    {
      icon: "/images/group-2051.svg",
      title: "What I can do for you",
      description: "Faster, better products that your users love. Here's all the services I provide:",
      points: ["Design Strategy", "Web and Mobile App Design", "Front-end Development"]
    },
    {
      icon: "/images/group-2017.svg",
      title: "Applications I'm fluent in",
      description: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      points: ["Sketch", "Webflow", "Figma"]
    },
    {
      icon: "/images/group-2016.svg",
      title: "What you can expect",
      description: "I design products that are more than pretty. I make them shippable and usable.",
      points: ["Clean and functional", "Device and user friendly", "Efficient and maintainable"]
    }
  ];

  return (
    <section id="Services" className="services-section">
      <div className="wrapper services">
        <motion.div 
          ref={ref}
          className="service-content-wrapper"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            className="service-heading-and-subtext-wrapper"
            variants={itemVariants}
          >
            <div className="services-sub-text-wrapper">
              <h6 className="services-sub-text">Services</h6>
            </div>
            
            <div className="service-heading-wrapper">
              <h2 className="service-heading">Design that solves problems, one product at a time.</h2>
            </div>
          </motion.div>
          
          <motion.div 
            className="services-grid"
            variants={containerVariants}
          >
            {serviceItems.map((service, index) => (
              <motion.div 
                key={index}
                className="service-wrapper"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-item-icon-wrapper">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={60} 
                    height={60}
                    className="service-icon image contain"
                    quality={90}
                  />
                </div>
                
                <div className="service-item-heading-wrapper">
                  <h5 className="service-item-heading">{service.title}</h5>
                </div>
                
                <div className="service-item-paragraph-wrapper">
                  <p className="service-description paragraph _16px">
                    {service.description}
                  </p>
                </div>
                
                <div className="service-pointer-wrapper">
                  {service.points.map((point, i) => (
                    <div key={i} className="service-pointer-item">
                      <div className="service-pointer">
                        <div className="service-bullet-point"></div>
                        <div className="service-pointer-trigger-text-wrapper">
                          <div className="service-pointer-trigger-text">{point}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
