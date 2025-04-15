'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 w-full h-full bg-white z-50 flex items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ 
                y: '150%', 
                rotateX: 90, 
                rotateZ: 30, 
                opacity: 0 
              }}
              animate={{ 
                y: 0, 
                rotateX: 0, 
                rotateZ: 0, 
                opacity: 1 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut" 
              }}
              className="text-4xl md:text-5xl font-bold mr-2"
            >
              Portfolio
            </motion.div>
            <motion.div
              initial={{ 
                y: '150%', 
                rotateX: 90, 
                rotateZ: 30, 
                opacity: 0 
              }}
              animate={{ 
                y: 0, 
                rotateX: 0, 
                rotateZ: 0, 
                opacity: 1 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: "easeOut" 
              }}
              className="text-4xl md:text-5xl font-bold"
            >
              Creator<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b]">.</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
