'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <div className="experience-section py-24 md:py-32">
      <div className="wrapper experience max-w-6xl mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="education-column"
          >
            <motion.div variants={titleVariants} className="mb-8 flex items-center">
              <div className="mr-2">
                <Image src="/images/education-icon.svg" width={24} height={24} alt="Education icon" className="image contain" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>
            
            <div className="space-y-8">
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xl font-semibold">Stanford University</h5>
                    <div className="text-gray-600">MSc (Human Computer Interaction)</div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600">• 2013-2015</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xl font-semibold">MIT Summer School</h5>
                    <div className="text-gray-600">UX Training Bootcamp</div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600">• 2013-2014</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xl font-semibold">California State University</h5>
                    <div className="text-gray-600">BSc in Software Engineering</div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600">• 2009-2012</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Work Experience Section */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="work-experience-column"
          >
            <motion.div variants={titleVariants} className="mb-8 flex items-center">
              <div className="mr-2">
                <Image src="/images/briefcase-icon.svg" width={24} height={24} alt="Work experience icon" className="image contain" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </motion.div>
            
            <div className="space-y-8">
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <motion.div 
                      className="mr-4 flex-shrink-0 bg-pink-100 rounded-full p-2 flex items-center justify-center" 
                      style={{ width: "40px", height: "40px" }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Image src="/images/rocket-icon.svg" width={24} height={24} alt="" className="image contain" />
                    </motion.div>
                    <div>
                      <h5 className="text-xl font-semibold">SpaceFleet</h5>
                      <div className="text-gray-600">Senior Product Designer</div>
                    </div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600 ml-[52px]">• April 2019 - Current</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <motion.div 
                      className="mr-4 flex-shrink-0 bg-blue-100 rounded-full p-2 flex items-center justify-center" 
                      style={{ width: "40px", height: "40px" }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Image src="/images/music-icon.svg" width={24} height={24} alt="" className="image contain" />
                    </motion.div>
                    <div>
                      <h5 className="text-xl font-semibold">MusicMash</h5>
                      <div className="text-gray-600">Information Architect</div>
                    </div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600 ml-[52px]">• April 2016 - May 2017</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                variants={itemVariants} 
                className="experience-item block relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <motion.div 
                      className="mr-4 flex-shrink-0 bg-yellow-100 rounded-full p-2 flex items-center justify-center" 
                      style={{ width: "40px", height: "40px" }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Image src="/images/crown-icon.svg" width={24} height={24} alt="" className="image contain" />
                    </motion.div>
                    <div>
                      <h5 className="text-xl font-semibold">Kingdom</h5>
                      <div className="text-gray-600">UI Designer</div>
                    </div>
                  </div>
                  <div className="flex items-center transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]">
                    <Image src="/images/arrow-right-up-line-206.svg" width={20} height={20} alt="" className="image contain" />
                  </div>
                </div>
                <div className="mt-2 text-gray-600 ml-[52px]">• April 2016 - May 2017</div>
                <div className="h-[1px] bg-gray-200 w-full mt-4 relative">
                  <div className="h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 absolute top-0 left-0"></div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
