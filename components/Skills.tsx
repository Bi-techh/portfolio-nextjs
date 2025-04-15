'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

type Skill = {
  id: number;
  name: string;
  icon: string;
  category: 'design' | 'development' | 'tools';
};

const skills: Skill[] = [
  // Design Skills
  { id: 1, name: 'UI Design', icon: '/images/vector-1.svg', category: 'design' },
  { id: 2, name: 'UX Design', icon: '/images/vector-2.svg', category: 'design' },
  { id: 3, name: 'Prototyping', icon: '/images/vector-3.svg', category: 'design' },
  { id: 4, name: 'Wireframing', icon: '/images/vector-4.svg', category: 'design' },
  { id: 5, name: 'Design Systems', icon: '/images/vector-5.svg', category: 'design' },
  
  // Development Skills
  { id: 6, name: 'HTML & CSS', icon: '/images/vector-6.svg', category: 'development' },
  { id: 7, name: 'JavaScript', icon: '/images/vector-7.svg', category: 'development' },
  { id: 8, name: 'React', icon: '/images/vector-8.svg', category: 'development' },
  { id: 9, name: 'Next.js', icon: '/images/vector-1-1.svg', category: 'development' },
  { id: 10, name: 'Tailwind CSS', icon: '/images/vector-2-1.svg', category: 'development' },
  
  // Tools
  { id: 11, name: 'Figma', icon: '/images/group-2016.svg', category: 'tools' },
  { id: 12, name: 'Sketch', icon: '/images/group-2017.svg', category: 'tools' },
  { id: 13, name: 'Adobe XD', icon: '/images/vector-1-2.svg', category: 'tools' },
  { id: 14, name: 'Photoshop', icon: '/images/vector-5-1.svg', category: 'tools' },
  { id: 15, name: 'Illustrator', icon: '/images/vector.svg', category: 'tools' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const designSkillsRef = useRef<HTMLDivElement>(null);
  const devSkillsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

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

    const elements = [headingRef.current, designSkillsRef.current, devSkillsRef.current, toolsRef.current];
    
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

  // Filter skills by category
  const designSkills = skills.filter(skill => skill.category === 'design');
  const developmentSkills = skills.filter(skill => skill.category === 'development');
  const toolSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="wrapper">
        <div 
          className="text-center mb-16 opacity-0 transition-opacity duration-700"
          ref={headingRef}
        >
          <h6 className="text-lg font-semibold text-primary mb-4">Skills</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've spent the last 7 years honing my skills in design and development.
            Here's an overview of my technical skills and tools I work with.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Design Skills */}
          <div 
            className="opacity-0 transition-opacity duration-700"
            ref={designSkillsRef}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Design</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {designSkills.map(skill => (
                <div key={skill.id} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Development Skills */}
          <div 
            className="opacity-0 transition-opacity duration-700"
            ref={devSkillsRef}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {developmentSkills.map(skill => (
                <div key={skill.id} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div 
            className="opacity-0 transition-opacity duration-700"
            ref={toolsRef}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {toolSkills.map(skill => (
                <div key={skill.id} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
