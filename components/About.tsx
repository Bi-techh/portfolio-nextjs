'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import StyledTextRenderer, { StyledText } from './StyledTextRenderer';

interface AboutProps {
  data: {
    name?: string;
    role?: string;
    profileImage?: {
      asset?: {
        _ref: string;
      };
    };
    shortBio?: string;
    shortBioStyle?: {
      textColor?: string;
      fontFamily?: string;
      fontSize?: string;
      fontWeight?: string;
    };
    longBio?: any; // This will be the rich text content
    skills?: Array<{
      name: string;
      level: number;
      skillStyle?: {
        textColor?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
      };
    }>;
    contactInfo?: {
      email?: string;
      phone?: string;
      location?: string;
    };
    socialLinks?: Array<any>;
  };
}

// Default content in case Sanity data isn't available yet
const defaultAboutContent = {
  name: "Jake Smith",
  role: "Product Designer",
  shortBio: "I'm a product designer with over 5 years of experience creating user-friendly interfaces for fast-growing startups.",
  skills: [
    { name: "UI/UX Design", level: 90, skillStyle: {} },
    { name: "Web Development", level: 80, skillStyle: {} },
    { name: "Brand Identity", level: 85, skillStyle: {} },
    { name: "User Research", level: 75, skillStyle: {} }
  ],
  contactInfo: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    location: "Berlin, Germany"
  }
};

export default function About({ data = {} }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Combine the default content with the data from Sanity
  const aboutContent = {
    ...defaultAboutContent,
    ...data,
  };

  // Get profile image URL from Sanity if available
  const profileImageUrl = aboutContent.profileImage?.asset?._ref 
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${aboutContent.profileImage.asset._ref
        .replace('image-', '')
        .replace('-jpg', '.jpg')
        .replace('-png', '.png')
        .replace('-webp', '.webp')
        .replace('-gif', '.gif')}`
    : '/images/profile-placeholder.jpg';

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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={profileImageUrl}
              alt={aboutContent.name || "Profile"}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* About Content */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <StyledText 
                text={aboutContent.name || ''} 
                className="text-2xl font-bold mb-1"
              />
              <StyledText 
                text={aboutContent.role || ''} 
                className="text-xl text-blue-600 mb-6"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StyledText 
                text={aboutContent.shortBio || ''} 
                style={aboutContent.shortBioStyle}
                className="text-lg mb-6 text-gray-700"
              />
            </motion.div>

            {/* Long Bio with Rich Text */}
            {aboutContent.longBio && (
              <motion.div variants={itemVariants} className="mb-8">
                <StyledTextRenderer value={aboutContent.longBio} />
              </motion.div>
            )}

            {/* Skills */}
            {aboutContent.skills && aboutContent.skills.length > 0 && (
              <motion.div variants={itemVariants} className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Skills</h4>
                <div className="space-y-4">
                  {aboutContent.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <StyledText 
                          text={skill.name} 
                          style={skill.skillStyle}
                          className="font-medium"
                        />
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contact Info */}
            {aboutContent.contactInfo && (
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2">
                  {aboutContent.contactInfo.email && (
                    <p className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>{aboutContent.contactInfo.email}</span>
                    </p>
                  )}
                  {aboutContent.contactInfo.phone && (
                    <p className="flex items-center">
                      <span className="mr-2">📱</span>
                      <span>{aboutContent.contactInfo.phone}</span>
                    </p>
                  )}
                  {aboutContent.contactInfo.location && (
                    <p className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{aboutContent.contactInfo.location}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
