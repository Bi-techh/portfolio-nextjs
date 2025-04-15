// This script creates a singleton document in Sanity
const { createClient } = require('@sanity/client');

// Initialize the Sanity client with credentials from .env.development
const client = createClient({
  projectId: 'ngkmh0ct',
  dataset: 'sun',
  apiVersion: '2023-05-03',
  token: 'sk6pUTgetnbLn6FD9llTPKh9XQmwl5NJTpjocpUnTxjRaB9EWNB9MM1Hw5MrLgqOucmHZXF63vVzF76qxIjjDU6PRgkx2LvVey7ZDHFKjFjBhX35qy7izn8aXB2NdqbxzQvGbe5bWermfrDVblBzf2a28qFbSftKPWxNkZXTuJqOssj6wqEj',
  useCdn: false,
});

// Document type to create
const documentType = process.argv[2];

if (!documentType) {
  console.error('Please provide a document type as an argument');
  process.exit(1);
}

// Create a sample document based on the document type
async function createSampleDocument() {
  // Basic document structure
  const doc = {
    _type: documentType,
    _id: `singleton.${documentType}`,
  };

  // Add fields based on document type
  switch (documentType) {
    case 'hero':
      Object.assign(doc, {
        title: 'Welcome to My Portfolio',
        subtitle: 'I create beautiful digital experiences',
        ctaText: 'View My Work',
        ctaLink: '/projects',
        secondaryCtaText: 'Contact Me',
        secondaryCtaLink: '/contact'
      });
      break;
    
    case 'navbar':
      Object.assign(doc, {
        logoText: 'Portfolio',
        menuItems: [
          { text: 'Home', url: '/' },
          { text: 'About', url: '/#about' },
          { text: 'Services', url: '/#services' },
          { text: 'Projects', url: '/projects' }
        ],
        ctaButton: {
          text: 'Contact',
          url: '/contact'
        }
      });
      break;
    
    case 'services':
      Object.assign(doc, {
        sectionTitle: 'My Services',
        subtitle: 'What I can do for you',
        servicesList: [
          {
            title: 'Web Design',
            description: 'Beautiful, responsive websites that work on all devices'
          },
          {
            title: 'Development',
            description: 'Clean, efficient code that brings designs to life'
          },
          {
            title: 'Branding',
            description: 'Cohesive brand identity that tells your story'
          }
        ]
      });
      break;

    case 'trustedBy':
      Object.assign(doc, {
        sectionTitle: 'Trusted By',
        description: "Companies I've worked with",
        companies: [
          { name: 'Company 1', url: '#' },
          { name: 'Company 2', url: '#' },
          { name: 'Company 3', url: '#' }
        ]
      });
      break;

    case 'about':
      Object.assign(doc, {
        name: 'John Doe',
        role: 'Web Developer & Designer',
        shortBio: 'Creating digital experiences since 2015',
        longBio: 'I am a passionate web developer with expertise in modern technologies.',
        email: 'contact@example.com',
        phone: '+1 234 567 890',
        location: 'New York, USA'
      });
      break;

    case 'experience':
      Object.assign(doc, {
        sectionTitle: 'Work Experience',
        subtitle: 'Places I have worked',
        experiences: [
          {
            position: 'Senior Developer',
            company: 'Tech Company',
            startDate: '2020-01',
            isCurrent: true,
            description: [{ _type: 'block', children: [{ _type: 'span', text: 'Led development of key projects' }] }],
            technologies: ['React', 'Node.js', 'TypeScript']
          },
          {
            position: 'Web Developer',
            company: 'Agency Inc',
            startDate: '2018-03',
            endDate: '2019-12',
            isCurrent: false,
            description: [{ _type: 'block', children: [{ _type: 'span', text: 'Built websites for various clients' }] }],
            technologies: ['JavaScript', 'HTML/CSS', 'WordPress']
          }
        ]
      });
      break;

    case 'testimonials':
      Object.assign(doc, {
        sectionTitle: 'Testimonials',
        subtitle: 'What clients say about my work',
        testimonialsList: [
          {
            name: 'Jane Smith',
            position: 'CEO',
            company: 'Company Inc',
            quote: 'Excellent work and delivered on time',
            rating: 5
          },
          {
            name: 'John Brown',
            position: 'Marketing Director',
            company: 'Brand Co',
            quote: 'Very professional and responsive',
            rating: 4.5
          }
        ]
      });
      break;

    case 'contact':
      Object.assign(doc, {
        sectionTitle: 'Get In Touch',
        subtitle: 'Have a project in mind?',
        email: 'contact@example.com',
        phone: '+1 234 567 890',
        address: 'New York, USA',
        formTitle: 'Send Me a Message',
        formSubtitle: 'Fill out the form below',
        submitButtonText: 'Send Message',
        successMessage: 'Your message has been sent. Thank you!'
      });
      break;

    case 'footer':
      Object.assign(doc, {
        logoText: 'Portfolio',
        tagline: 'Web Developer & Designer',
        copyrightText: '© 2025 All Rights Reserved',
        navigationLinks: [
          { text: 'Home', url: '/' },
          { text: 'About', url: '/#about' },
          { text: 'Services', url: '/#services' },
          { text: 'Contact', url: '/contact' }
        ]
      });
      break;

    case 'projectsShowcase':
      Object.assign(doc, {
        sectionTitle: 'My Projects',
        subtitle: 'Recent work I have done',
        showFeaturedOnly: true,
        numberOfProjects: 6,
        viewAllButtonText: 'View All Projects',
        viewAllButtonLink: '/projects'
      });
      break;

    case 'blogShowcase':
      Object.assign(doc, {
        sectionTitle: 'Latest Articles',
        subtitle: 'Thoughts and insights',
        showLatest: true,
        numberOfPosts: 3,
        viewAllButtonText: 'View All Articles',
        viewAllButtonLink: '/blog'
      });
      break;

    case 'siteSettings':
      Object.assign(doc, {
        title: 'My Portfolio Website',
        description: 'Portfolio of a web developer and designer',
        keywords: ['web design', 'development', 'portfolio'],
        primaryColor: '#3498db',
        secondaryColor: '#2ecc71',
        contactEmail: 'contact@example.com',
        contactPhone: '+1 234 567 890',
        address: 'New York, USA',
        enableBlog: true,
        enableContactForm: true
      });
      break;

    default:
      console.error(`No template available for document type: ${documentType}`);
      process.exit(1);
  }

  try {
    // Check if document already exists
    const existingDoc = await client.fetch(
      `*[_id == $id][0]`,
      { id: `singleton.${documentType}` }
    );

    if (existingDoc) {
      console.log(`Document of type ${documentType} already exists with ID: ${existingDoc._id}`);
      console.log('Updating existing document...');
      const result = await client.createOrReplace(doc);
      console.log(`Document updated with ID: ${result._id}`);
    } else {
      console.log(`Creating new document of type: ${documentType}`);
      const result = await client.createIfNotExists(doc);
      console.log(`Document created with ID: ${result._id}`);
    }
  } catch (error) {
    console.error('Error creating/updating document:', error);
    process.exit(1);
  }
}

// Run the function
createSampleDocument()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
