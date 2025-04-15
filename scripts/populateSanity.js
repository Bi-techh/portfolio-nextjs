// This script populates Sanity with initial content from the existing website
const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Initial content for the Hero section
const heroContent = {
  _type: 'hero',
  title: 'I design products that delight and inspire people.',
  subtitle: "Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.",
  ctaText: 'Book a call',
  ctaLink: '/contact',
  secondaryCtaText: 'Download CV',
  secondaryCtaLink: 'https://example.com/cv.pdf',
  // Note: For images, we'll need to upload them separately
  // This is just a placeholder URL
  foregroundImageUrl: '/images/group-20160-min.jpg',
};

// Initial content for the Navbar
const navbarContent = {
  _type: 'navbar',
  logoText: 'Portfolio',
  menuItems: [
    { text: 'About', url: '/#About', isButton: false, openInNewTab: false },
    { text: 'Services', url: '/#Services', isButton: false, openInNewTab: false },
    { text: 'Projects', url: '/projects', isButton: false, openInNewTab: false },
    { text: 'Blog', url: '/blog', isButton: false, openInNewTab: false },
  ],
  ctaButton: {
    text: 'Book a call',
    url: '/contact',
    openInNewTab: false,
  },
};

// Initial content for the Services section
const servicesContent = {
  _type: 'services',
  sectionTitle: 'My Services',
  subtitle: 'I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.',
  servicesList: [
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly interfaces that are intuitive, efficient, and enjoyable to use.',
      iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    },
    {
      title: 'Web Development',
      description: 'Building responsive websites with clean, efficient, and maintainable code.',
      iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    },
    {
      title: 'Mobile App Design',
      description: 'Designing intuitive and engaging mobile app interfaces with a focus on user experience.',
      iconCode: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>',
    },
  ],
};

// Initial content for the Trusted By section
const trustedByContent = {
  _type: 'trustedBy',
  sectionTitle: 'Trusted By',
  description: "I've had the pleasure of working with these awesome companies",
  companies: [
    {
      name: 'Google',
      logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><path d="M50.5 20.2c0 5.5-4.3 9.5-9.5 9.5s-9.5-4-9.5-9.5c0-5.6 4.3-9.5 9.5-9.5s9.5 3.9 9.5 9.5zm-4.2 0c0-3.4-2.5-5.8-5.4-5.8-2.9 0-5.4 2.4-5.4 5.8 0 3.3 2.5 5.8 5.4 5.8 2.9 0 5.4-2.4 5.4-5.8z" fill="#4285F4"/><path d="M73.5 20.2c0 5.5-4.3 9.5-9.5 9.5s-9.5-4-9.5-9.5c0-5.6 4.3-9.5 9.5-9.5s9.5 3.9 9.5 9.5zm-4.2 0c0-3.4-2.5-5.8-5.4-5.8-2.9 0-5.4 2.4-5.4 5.8 0 3.3 2.5 5.8 5.4 5.8 2.9 0 5.4-2.4 5.4-5.8z" fill="#EA4335"/><path d="M95.3 11.4v16.9c0 7-4.1 9.8-9 9.8-4.6 0-7.3-3.1-8.4-5.6l3.6-1.5c.6 1.5 2.2 3.3 4.8 3.3 3.1 0 5-1.9 5-5.5v-1.4h-.1c-.9 1.2-2.7 2.2-5 2.2-4.7 0-9-4.1-9-9.4 0-5.4 4.3-9.5 9-9.5 2.3 0 4 1 5 2.1h.1v-1.5h3.9zm-3.6 8.9c0-3.3-2.2-5.8-5.1-5.8-2.9 0-5.3 2.4-5.3 5.8 0 3.3 2.4 5.7 5.3 5.7 2.9 0 5.1-2.4 5.1-5.7z" fill="#FBBC05"/><path d="M102.7 2.3v27h-4V2.3h4z" fill="#34A853"/><path d="M117.6 22.1l3.2 2.1c-1 1.5-3.5 4.2-7.8 4.2-5.3 0-9.3-4.1-9.3-9.5 0-5.7 4-9.5 8.8-9.5 4.9 0 7.2 3.9 8 6l.4 1-12.5 5.2c1 1.9 2.5 2.8 4.6 2.8 2.1 0 3.6-1 4.6-2.3zm-9.8-3.4l8.3-3.5c-.5-1.1-1.9-1.9-3.5-1.9-2.1 0-5 1.9-4.8 5.4z" fill="#4285F4"/><path d="M18.6 18.5v-4.3h14.4c.1.8.2 1.7.2 2.7 0 3.2-.9 7.2-3.7 10-2.8 2.9-6.4 4.4-11.1 4.4C8.4 31.3 1 24.3 1 15.7S8.4 0 18.4 0c4.9 0 8.3 1.9 10.9 4.3l-3.1 3.1c-1.9-1.8-4.4-3.1-7.9-3.1-6.4 0-11.5 5.2-11.5 11.5 0 6.4 5.1 11.5 11.5 11.5 4.2 0 6.5-1.7 8.1-3.2 1.2-1.2 2-3 2.3-5.5l-10.2-.1z" fill="#4285F4"/></svg>',
      url: 'https://google.com',
    },
    {
      name: 'Microsoft',
      logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><path d="M19 19H1V1h18v18z" fill="#F25022"/><path d="M39 19H21V1h18v18z" fill="#7FBA00"/><path d="M19 39H1V21h18v18z" fill="#00A4EF"/><path d="M39 39H21V21h18v18z" fill="#FFB900"/><path d="M88.5 14.1v-4.6h-3.2v-2.8l-3.2.9v1.9h-2.5v4.6h2.5v7.5c0 3.2 1.3 4.9 5.1 4.9 1.4 0 2.9-.3 3.9-.7l-.9-4.3c-.6.2-1.2.3-1.7.3-1.2 0-1.6-.5-1.6-1.9v-5.8h3.6zm-17.9 4.6c0-2.5-1.1-4.5-3.5-4.5-1.4 0-2.4.7-3 1.8v-1.5h-5.2v16.7h5.2v-9.4c0-1.6.9-2.5 2.1-2.5 1.3 0 2 .9 2 2.5v9.4h5.2v-9.8c0-.9-.1-1.8-.3-2.7h-2.5zm-20.1-4.6h-5.2v16.7h5.2V14.1zm-2.6-8.5c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm-8.4 8.5h-5.2v16.7h5.2V14.1zm-2.6-8.5c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1z" fill="#737373"/><path d="M104.1 14.1h-5.2v16.7h5.2V14.1zm-2.6-8.5c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1zm16.3 8.2c-1.4 0-2.7.7-3.4 1.9v-1.6h-5.2v16.7h5.2v-9.2c0-1.7.9-2.7 2.3-2.7 1.2 0 2 .8 2 2.4v9.5h5.2v-10c0-3.8-2-7-6.1-7z" fill="#737373"/></svg>',
      url: 'https://microsoft.com',
    },
    {
      name: 'Amazon',
      logoSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><path d="M72.2 25.2c-6.5 4.8-15.9 7.3-24 7.3-11.4 0-21.6-4.2-29.3-11.2-.6-.5-.1-1.3.7-.9 8.5 5 19 8 29.9 8 7.3 0 15.4-1.5 22.8-4.7 1.1-.5 2.1.7 1 1.5z" fill="#FF9900"/><path d="M74.9 22.1c-.8-1.1-5.5-.5-7.6-.3-.6.1-.7-.5-.2-.9 3.7-2.6 9.8-1.9 10.5-.9.7.9-.2 7.5-3.9 10.6-.6.5-1.1.2-.9-.4.8-2 2.7-6.5 2.1-8.1z" fill="#FF9900"/><path d="M67.1 9.7V7.4c0-.4.3-.7.7-.7h12.8c.4 0 .7.3.7.7v2c0 .4-.3.8-.8.9l-6.6 1.9c-.4.1-.7-.3-.7-.7v-2c0-.4.4-.8.8-.9l5.6-1.3H68c-.4 0-.8.3-.8.7v1.8c0 .4-.3.7-.7.7h-2.2c-.4 0-.7-.3-.7-.7h1.5zm-9.6 11.8c0 .4.3.7.7.7h2.3c.4 0 .7-.3.7-.7V7.4c0-.4-.3-.7-.7-.7h-2.2c-.4 0-.7.3-.7.7v14.1h-.1zm-7.4-17h-2.2c-.4 0-.7.3-.7.7v14.1c0 .4.3.7.7.7h2.1c.4 0 .7-.3.7-.7V4.5c0-.4-.3-.7-.7-.7h.1zm-11.3 0h-2.3c-.4 0-.7.3-.7.7v10.1L29 5c-.3-.7-.9-.7-1.2-.7h-2.3c-.4 0-.7.3-.7.7v14.1c0 .4.3.7.7.7h2.2c.4 0 .7-.3.7-.7V9l6.9 10.2c.3.4.9.6 1.3.6h2.6c.4 0 .7-.3.7-.7V4.5c0-.4-.3-.7-.7-.7h-.1zm-17.3 8.6h-2.2c-.4 0-.7.3-.7.7v5.6c0 .4.3.7.7.7h2.2c.4 0 .7-.3.7-.7v-5.6c0-.4-.3-.7-.7-.7zm0-8.6h-2.2c-.4 0-.7.3-.7.7v5.6c0 .4.3.7.7.7h2.2c.4 0 .7-.3.7-.7V4.5c0-.4-.3-.7-.7-.7zm-7.2 0h-7.3c-.4 0-.7.3-.7.7v2c0 .4.3.7.7.7h2.5v11.4c0 .4.3.7.7.7h2.3c.4 0 .7-.3.7-.7V7.9h2.5c.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7h-1.4zm61.5 8.6h-2.2c-.4 0-.7.3-.7.7v5.6c0 .4.3.7.7.7h2.2c.4 0 .7-.3.7-.7v-5.6c0-.4-.3-.7-.7-.7zm0-8.6h-2.2c-.4 0-.7.3-.7.7v5.6c0 .4.3.7.7.7h2.2c.4 0 .7-.3.7-.7V4.5c0-.4-.3-.7-.7-.7z" fill="#221F1F"/><path d="M98.8 30.9c-11.7 8.7-28.8 13.3-43.4 13.3-20.5 0-39-7.6-53-20.2-1.1-.9-.1-2.2 1.2-1.5 15.3 8.9 34.1 14.3 53.6 14.3 13.2 0 27.7-2.7 41-8.4 2-.9 3.7 1.3 1.6 2.5z" fill="#FF9900"/><path d="M103.8 25.3c-1.5-1.9-9.9-.9-13.7-.5-1.1.1-1.3-.9-.3-1.6 6.7-4.7 17.6-3.4 18.9-1.8 1.3 1.6-.3 13.5-7.1 19.1-1 .9-2 .4-1.6-.7 1.5-3.7 4.9-11.9 3.8-14.5z" fill="#FF9900"/></svg>',
      url: 'https://amazon.com',
    },
  ],
};

// Initial content for About section
const aboutContent = {
  _type: 'about',
  name: 'Jake Anderson',
  role: 'Product Designer & Developer',
  shortBio: 'I design and develop experiences that make people's lives simple.',
  longBio: 'I'm a product designer and developer based in Berlin, with over 8 years of experience in the industry. I specialize in creating user-friendly interfaces for web and mobile applications. My approach combines aesthetic design principles with a deep understanding of user behavior to create products that are both beautiful and functional.\n\nI believe that good design is not just about how something looks, but how it works. I'm passionate about creating digital experiences that are intuitive, accessible, and enjoyable to use.',
  email: 'hello@jakeanderson.com',
  phone: '+49 123 456 7890',
  location: 'Berlin, Germany',
};

// Initial content for Experience section
const experienceContent = {
  _type: 'experience',
  sectionTitle: 'Work Experience',
  subtitle: 'Here is a summary of my work experience and skills',
  experiences: [
    {
      position: 'Senior Product Designer',
      company: 'Spotify',
      startDate: '2020-01',
      isCurrent: true,
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Led the redesign of the mobile app, resulting in a 15% increase in user engagement.',
            },
          ],
        },
      ],
      technologies: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
    },
    {
      position: 'UI/UX Designer',
      company: 'Airbnb',
      startDate: '2017-03',
      endDate: '2019-12',
      isCurrent: false,
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Designed user interfaces for the booking flow, improving conversion rates by 20%.',
            },
          ],
        },
      ],
      technologies: ['Adobe XD', 'Sketch', 'InVision', 'User Testing'],
    },
  ],
};

// Initial content for Testimonials section
const testimonialsContent = {
  _type: 'testimonials',
  sectionTitle: 'Testimonials',
  subtitle: 'What clients say about my work',
  testimonialsList: [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      quote: 'Jake transformed our product with his exceptional design skills. His attention to detail and user-focused approach made all the difference.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateLab',
      quote: 'Working with Jake was a pleasure. He not only delivered outstanding designs but also provided valuable insights that improved our product strategy.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'GrowthHub',
      quote: "Jake's designs helped us increase our conversion rates significantly. His understanding of user behavior is truly impressive.",
      rating: 4.5,
    },
  ],
};

// Initial content for Contact section
const contactContent = {
  _type: 'contact',
  sectionTitle: 'Get In Touch',
  subtitle: 'Have a project in mind? Let's talk about it.',
  email: 'hello@jakeanderson.com',
  phone: '+49 123 456 7890',
  address: 'Berlin, Germany',
  formTitle: 'Send Me a Message',
  formSubtitle: 'Fill out the form below and I'll get back to you as soon as possible.',
  submitButtonText: 'Send Message',
  successMessage: 'Your message has been sent. Thank you!',
};

// Initial content for Footer section
const footerContent = {
  _type: 'footer',
  logoText: 'Jake Anderson',
  tagline: 'Product Designer & Developer',
  copyrightText: ' 2025 Jake Anderson. All Rights Reserved',
  navigationLinks: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/#About' },
    { text: 'Services', url: '/#Services' },
    { text: 'Projects', url: '/projects' },
    { text: 'Blog', url: '/blog' },
    { text: 'Contact', url: '/contact' },
  ],
  columns: [
    {
      title: 'Services',
      links: [
        { text: 'UI/UX Design', url: '/#Services' },
        { text: 'Web Development', url: '/#Services' },
        { text: 'Mobile App Design', url: '/#Services' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'hello@jakeanderson.com', url: 'mailto:hello@jakeanderson.com' },
        { text: '+49 123 456 7890', url: 'tel:+491234567890' },
        { text: 'Berlin, Germany', url: 'https://maps.google.com' },
      ],
    },
  ],
};

// Initial content for Projects Showcase section
const projectsShowcaseContent = {
  _type: 'projectsShowcase',
  sectionTitle: 'My Projects',
  subtitle: 'Here are some of my recent projects',
  showFeaturedOnly: true,
  numberOfProjects: 6,
  viewAllButtonText: 'View All Projects',
  viewAllButtonLink: '/projects',
  filterByCategories: true,
};

// Initial content for Blog Showcase section
const blogShowcaseContent = {
  _type: 'blogShowcase',
  sectionTitle: 'Latest Articles',
  subtitle: 'Thoughts, ideas, and insights about design and development',
  showLatest: true,
  numberOfPosts: 3,
  viewAllButtonText: 'View All Articles',
  viewAllButtonLink: '/blog',
};

// Initial content for Site Settings
const siteSettingsContent = {
  _type: 'siteSettings',
  title: 'Jake Anderson - Product Designer & Developer',
  description: 'Portfolio of Jake Anderson, a product designer and developer based in Berlin, specializing in UI/UX design, web and mobile app development.',
  keywords: ['UI/UX Design', 'Web Development', 'Product Design', 'Mobile App Design', 'Berlin'],
  primaryColor: '#6C63FF',
  secondaryColor: '#FF6584',
  contactEmail: 'hello@jakeanderson.com',
  contactPhone: '+49 123 456 7890',
  address: 'Berlin, Germany',
  enableBlog: true,
  enableContactForm: true,
};

// Function to create a document if it doesn't exist
async function createIfNotExists(doc) {
  try {
    // Check if document exists
    const existingDoc = await client.fetch(
      `*[_type == "${doc._type}" && !(_id in path("drafts.**"))][0]`
    );
    
    if (!existingDoc) {
      console.log(`Creating ${doc._type} document...`);
      await client.create(doc);
      console.log(`Created ${doc._type} document successfully`);
    } else {
      console.log(`${doc._type} document already exists, skipping`);
    }
  } catch (error) {
    console.error(`Error creating ${doc._type} document:`, error);
  }
}

// Main function to populate all content
async function populateContent() {
  console.log('Starting to populate Sanity with initial content...');
  
  // Create all documents
  await createIfNotExists(heroContent);
  await createIfNotExists(navbarContent);
  await createIfNotExists(servicesContent);
  await createIfNotExists(trustedByContent);
  await createIfNotExists(aboutContent);
  await createIfNotExists(experienceContent);
  await createIfNotExists(testimonialsContent);
  await createIfNotExists(contactContent);
  await createIfNotExists(footerContent);
  await createIfNotExists(projectsShowcaseContent);
  await createIfNotExists(blogShowcaseContent);
  await createIfNotExists(siteSettingsContent);
  
  console.log('Finished populating Sanity with initial content');
}

// Run the population script
populateContent()
  .catch((err) => {
    console.error('Error running population script:', err);
    process.exit(1);
  });
