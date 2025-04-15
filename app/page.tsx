import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import BlogShowcase from '@/components/BlogShowcase';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SanityVisualEditor from '@/components/SanityVisualEditor';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { 
  heroQuery, 
  navbarQuery, 
  servicesQuery, 
  trustedByQuery,
  projectsShowcaseQuery,
  blogShowcaseQuery,
  aboutQuery,
  experienceQuery,
  testimonialsQuery,
  contactQuery,
  footerQuery
} from '@/sanity/lib/queries';

// Define types for our Sanity data
interface HeroData {
  title?: string;
  titleStyle?: {
    textColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  subtitle?: string;
  subtitleStyle?: {
    textColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  profileImage?: {
    asset?: {
      _ref: string;
    };
  };
  backgroundImageUrl?: string;
  foregroundImageUrl?: string;
}

interface NavbarData {
  logoUrl?: string;
  logoText?: string;
  menuItems?: Array<{
    text: string;
    url: string;
    isButton?: boolean;
    openInNewTab?: boolean;
    submenu?: Array<{
      text: string;
      url: string;
      openInNewTab?: boolean;
    }>;
  }>;
  ctaButton?: {
    text: string;
    url: string;
    openInNewTab?: boolean;
  };
}

// Add placeholder interfaces for other components
interface GenericSectionData {
  [key: string]: any;
}

export const metadata = {
  title: 'Portfolio Creator - Product Designer & Developer',
  description: 'Portfolio of a product designer based in Berlin, specializing in UI/UX design, mobile apps, and web development for startups.',
};

export const dynamic = 'force-dynamic';

// More comprehensive default data for each section in case Sanity fetch fails
const defaultData = {
  hero: {
    title: 'I design products that delight and inspire people.',
    titleStyle: {
      textColor: '#000',
      fontFamily: 'Arial',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    subtitle: "Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.",
    subtitleStyle: {
      textColor: '#666',
      fontFamily: 'Arial',
      fontSize: '18px',
      fontWeight: 'normal'
    },
    ctaText: 'Book a call',
    ctaLink: '/contact',
    secondaryCtaText: 'Download CV',
    secondaryCtaLink: '#',
    profileImage: {
      asset: {
        _ref: 'image-123'
      }
    }
  },
  navbar: {
    logoText: 'Portfolio',
    menuItems: [
      { text: 'About', url: '/#about', isButton: false, openInNewTab: false },
      { text: 'Services', url: '/#services', isButton: false, openInNewTab: false },
      { text: 'Projects', url: '/projects', isButton: false, openInNewTab: false },
    ],
    ctaButton: {
      text: 'Contact',
      url: '/contact',
      openInNewTab: false,
    },
  },
  services: {
    title: 'My Services',
    subtitle: 'What I can do for you',
    items: [
      { title: 'UI/UX Design', description: 'Creating user-friendly interfaces' },
      { title: 'Web Development', description: 'Building responsive websites' },
      { title: 'Brand Identity', description: 'Designing brand identities' },
    ]
  },
  trustedBy: {
    title: 'Trusted By',
    subtitle: 'Companies I\'ve worked with',
    items: []
  },
  about: {
    name: 'Jake Smith',
    role: 'Product Designer',
    shortBio: 'I help companies build great products',
    longBio: []
  },
  experience: {
    title: 'My Experience',
    subtitle: 'Where I\'ve worked',
    items: []
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What clients say about me',
    items: []
  },
  contact: {
    title: 'Contact Me',
    subtitle: 'Get in touch',
    email: 'hello@example.com',
    phone: '+1 123 456 7890'
  },
  footer: {
    logoText: 'Portfolio',
    tagline: 'Creating digital experiences',
    copyright: ' 2025 All rights reserved',
    links: []
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Recent work',
    items: []
  },
  blog: {
    title: 'My Blog',
    subtitle: 'Latest articles',
    items: []
  }
};

export default async function Home() {
  // Wrap all data fetching in try/catch to prevent page from crashing
  try {
    // Fetch data from Sanity for each section with proper type assertions and fallbacks
    const heroData = await sanityFetch<HeroData>({ 
      query: heroQuery,
      fallback: defaultData.hero as HeroData,
      tags: ['hero', 'page'],
      // Set a short timeout to prevent hanging
    });
    
    console.log('Hero data fetched:', JSON.stringify(heroData, null, 2));
    
    const navbarData = await sanityFetch<NavbarData>({ 
      query: navbarQuery,
      fallback: defaultData.navbar as NavbarData,
      tags: ['navbar', 'page']
    });
    
    const servicesData = await sanityFetch<GenericSectionData>({ 
      query: servicesQuery,
      fallback: defaultData.services as GenericSectionData,
      tags: ['services', 'page']
    });
    
    const trustedByData = await sanityFetch<GenericSectionData>({ 
      query: trustedByQuery,
      fallback: defaultData.trustedBy as GenericSectionData,
      tags: ['trustedBy', 'page']
    });
    
    const projectsData = await sanityFetch<GenericSectionData>({ 
      query: projectsShowcaseQuery,
      fallback: defaultData.projects as GenericSectionData,
      tags: ['projects', 'page']
    });
    
    const blogData = await sanityFetch<GenericSectionData>({ 
      query: blogShowcaseQuery,
      fallback: defaultData.blog as GenericSectionData,
      tags: ['blog', 'page']
    });
    
    const experienceData = await sanityFetch<GenericSectionData>({ 
      query: experienceQuery,
      fallback: defaultData.experience as GenericSectionData,
      tags: ['experience', 'page']
    });
    
    const testimonialsData = await sanityFetch<GenericSectionData>({ 
      query: testimonialsQuery,
      fallback: defaultData.testimonials as GenericSectionData,
      tags: ['testimonials', 'page']
    });
    
    const contactData = await sanityFetch<GenericSectionData>({ 
      query: contactQuery,
      fallback: defaultData.contact as GenericSectionData,
      tags: ['contact', 'page']
    });
    
    const footerData = await sanityFetch<GenericSectionData>({ 
      query: footerQuery,
      fallback: defaultData.footer as GenericSectionData,
      tags: ['footer', 'page']
    });

    return (
      <main>
        <Preloader />
        
        {/* Navbar with Sanity data */}
        <SanityVisualEditor documentType="navbar">
          <Navbar data={navbarData || defaultData.navbar} />
        </SanityVisualEditor>
        
        {/* Hero section with Sanity data */}
        <SanityVisualEditor documentType="hero">
          <Hero data={heroData || defaultData.hero} />
        </SanityVisualEditor>
        
        {/* Trusted By section with Sanity data */}
        <SanityVisualEditor documentType="trustedBy">
          <TrustedBy data={trustedByData || defaultData.trustedBy} />
        </SanityVisualEditor>
        
        {/* Services section with Sanity data */}
        <SanityVisualEditor documentType="services">
          <Services data={servicesData || defaultData.services} />
        </SanityVisualEditor>
        
        {/* Projects showcase with Sanity data */}
        <SanityVisualEditor documentType="projectsShowcase">
          <ProjectsShowcase data={projectsData || defaultData.projects} />
        </SanityVisualEditor>
        
        {/* Blog showcase with Sanity data */}
        <SanityVisualEditor documentType="blogShowcase">
          <BlogShowcase data={blogData || defaultData.blog} />
        </SanityVisualEditor>
        
        {/* Experience section with Sanity data */}
        <SanityVisualEditor documentType="experience">
          <Experience data={experienceData || defaultData.experience} />
        </SanityVisualEditor>
        
        {/* Testimonials section with Sanity data */}
        <SanityVisualEditor documentType="testimonials">
          <Testimonials data={testimonialsData || defaultData.testimonials} />
        </SanityVisualEditor>
        
        {/* Contact section with Sanity data */}
        <SanityVisualEditor documentType="contact">
          <Contact data={contactData || defaultData.contact} />
        </SanityVisualEditor>
        
        {/* Footer with Sanity data */}
        <SanityVisualEditor documentType="footer">
          <Footer data={footerData || defaultData.footer} />
        </SanityVisualEditor>
      </main>
    );
  } catch (error) {
    console.error('Error rendering home page:', error);
    
    // Fallback UI when everything fails
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Portfolio Website</h1>
        <p className="text-lg mb-8">The content is currently unavailable. Please try again later.</p>
        <a 
          href="/client-guide" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          View Content Management Guide
        </a>
      </main>
    );
  }
}
