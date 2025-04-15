'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    id: 1,
    title: 'Design tips for designers, that cover everything you need',
    date: 'April 16, 2021',
    readTime: '6 mins',
    slug: 'design-tips-for-designers-that-cover-everything-you-need'
  },
  {
    id: 2,
    title: 'How to build rapport with your web design clients',
    date: 'April 16, 2021',
    readTime: '5 mins',
    slug: 'how-to-build-rapport-with-your-web-design-clients'
  },
  {
    id: 3,
    title: 'Top 6 free website mockup tools 2021',
    date: 'April 16, 2021',
    readTime: '5 mins',
    slug: 'top-6-free-website-mockup-tools-2021'
  },
  {
    id: 4,
    title: 'Logo design trends to avoid in 2021',
    date: 'April 16, 2021',
    readTime: '7 mins',
    slug: 'logo-design-trends-to-avoid-in-2021'
  },
  {
    id: 5,
    title: '22 best UI design tools',
    date: 'April 16, 2021',
    readTime: '7 mins',
    slug: '22-best-ui-design-tools'
  }
];

export default function BlogShowcase() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const blogItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="w-full"
        >
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1 lg:sticky lg:top-24 self-start">
                <motion.div variants={headingVariants} className="mb-4">
                  <h6 className="text-sm font-semibold tracking-widest uppercase text-gray-300">BLOGS</h6>
                </motion.div>
                <motion.div variants={headingVariants} className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Latest Blogs</h2>
                </motion.div>
                <motion.div variants={headingVariants} className="mt-6">
                  <Link href="/blog" className="flex items-center text-white hover:opacity-80 transition-all duration-300">
                    <span className="text-base font-medium mr-2">View all</span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <Image 
                        src="/images/vector-2-1.svg" 
                        width={16} 
                        height={16} 
                        alt="Arrow icon" 
                        className="w-4 h-4" 
                      />
                    </div>
                  </Link>
                </motion.div>
              </div>
              
              <div className="lg:col-span-2">
                <motion.div className="flex flex-col w-full" data-component-name="BlogShowcase">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      custom={index}
                      variants={blogItemVariants}
                      className={`py-8 ${index === 0 ? 'pt-0' : ''} border-b border-gray-600`}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                          <div className="text-sm text-gray-400">{post.date} - {post.readTime}</div>
                        </div>
                        <h3 className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-300">{post.title}</h3>
                        <Link href={`/blog/${post.slug}`} className="flex items-center text-white hover:opacity-80 transition-all duration-300 mt-4 group">
                          <span className="text-base font-medium mr-2">Read the article</span>
                          <div className="transition-transform duration-300 group-hover:translate-x-1">
                            <Image 
                              src="/images/vector-2-1.svg" 
                              width={16} 
                              height={16} 
                              alt="Arrow icon" 
                              className="w-4 h-4" 
                            />
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
