import Link from 'next/link';
import Image from 'next/image';
import ClientGuideHeader from '@/components/ClientGuideHeader';

export default function ClientGuidePage() {
  // Base URL for Sanity Studio
  const studioBaseUrl = '/sun';
  
  // List of all editable sections with descriptions
  const editableSections = [
    {
      id: 'hero',
      title: 'Hero Section',
      description: 'The main banner section at the top of the homepage',
      editLink: `${studioBaseUrl}/desk/hero`,
      fields: ['Title', 'Subtitle', 'Call-to-action buttons', 'Background image']
    },
    {
      id: 'navbar',
      title: 'Navigation Bar',
      description: 'The menu at the top of every page',
      editLink: `${studioBaseUrl}/desk/navbar`,
      fields: ['Logo text', 'Menu items', 'Contact button']
    },
    {
      id: 'services',
      title: 'Services Section',
      description: 'Showcase of services you offer',
      editLink: `${studioBaseUrl}/desk/services`,
      fields: ['Section title', 'Subtitle', 'Service items (title, description, icon)']
    },
    {
      id: 'trustedBy',
      title: 'Trusted By Section',
      description: 'Logos of companies you\'ve worked with',
      editLink: `${studioBaseUrl}/desk/trustedBy`,
      fields: ['Section title', 'Description', 'Company logos']
    },
    {
      id: 'about',
      title: 'About Section',
      description: 'Information about you or your company',
      editLink: `${studioBaseUrl}/desk/about`,
      fields: ['Name', 'Role', 'Short bio', 'Long bio', 'Contact information', 'Profile image']
    },
    {
      id: 'experience',
      title: 'Experience Section',
      description: 'Your work history and skills',
      editLink: `${studioBaseUrl}/desk/experience`,
      fields: ['Section title', 'Subtitle', 'Work experiences (position, company, dates, description)']
    },
    {
      id: 'testimonials',
      title: 'Testimonials Section',
      description: 'Client reviews and feedback',
      editLink: `${studioBaseUrl}/desk/testimonials`,
      fields: ['Section title', 'Subtitle', 'Testimonials (name, position, company, quote, rating)']
    },
    {
      id: 'contact',
      title: 'Contact Section',
      description: 'Contact form and information',
      editLink: `${studioBaseUrl}/desk/contact`,
      fields: ['Section title', 'Subtitle', 'Contact details', 'Form settings']
    },
    {
      id: 'footer',
      title: 'Footer Section',
      description: 'The bottom section of every page',
      editLink: `${studioBaseUrl}/desk/footer`,
      fields: ['Logo text', 'Tagline', 'Copyright text', 'Navigation links', 'Column links']
    },
    {
      id: 'projectsShowcase',
      title: 'Projects Showcase',
      description: 'Gallery of your portfolio projects',
      editLink: `${studioBaseUrl}/desk/projectsShowcase`,
      fields: ['Section title', 'Subtitle', 'Display settings', 'Button text and link']
    },
    {
      id: 'blogShowcase',
      title: 'Blog Showcase',
      description: 'Preview of your latest blog posts',
      editLink: `${studioBaseUrl}/desk/blogShowcase`,
      fields: ['Section title', 'Subtitle', 'Display settings', 'Button text and link']
    },
    {
      id: 'siteSettings',
      title: 'Site Settings',
      description: 'General website settings',
      editLink: `${studioBaseUrl}/desk/siteSettings`,
      fields: ['Site title', 'Description', 'Keywords', 'Colors', 'Contact information', 'Feature toggles']
    },
    {
      id: 'project',
      title: 'Projects',
      description: 'Individual portfolio project entries',
      editLink: `${studioBaseUrl}/desk/project`,
      fields: ['Title', 'Description', 'Images', 'Categories', 'Technologies', 'Client', 'Date', 'URL']
    },
    {
      id: 'blog',
      title: 'Blog Posts',
      description: 'Individual blog article entries',
      editLink: `${studioBaseUrl}/desk/blog`,
      fields: ['Title', 'Content', 'Author', 'Categories', 'Featured image', 'Publish date']
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <ClientGuideHeader />
      
      <div id="sections-list" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Editable Website Sections</h2>
        <p className="text-gray-600 mb-8">
          Click on any section below to edit its content in Sanity Studio. All changes you make will be saved as drafts until you publish them.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editableSections.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                  <div className={`rounded-full w-3 h-3 mt-1.5 ${section.id === 'siteSettings' ? 'bg-purple-500' : section.id === 'project' || section.id === 'blog' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Editable Fields:</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {section.fields.map((field, index) => (
                      <li key={index}>{field}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <Link 
                  href={section.editLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                  Edit {section.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Visual Editing Mode</h2>
          <p className="text-gray-600 mb-4">
            When viewing your website, you can hover over any section to see an edit button that takes you directly to that section in Sanity Studio.
          </p>
          <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Visit your website in preview mode</li>
              <li>Hover over the section you want to edit</li>
              <li>Click the "Edit [Section]" button that appears</li>
              <li>Make your changes in Sanity Studio</li>
              <li>Click "Publish" to make your changes live</li>
            </ol>
          </div>
          <div className="text-sm text-gray-500">
            <strong>Note:</strong> Visual editing mode is available in preview mode and development environments.
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Content Types</h2>
          <p className="text-gray-600 mb-4">
            Your website has different types of content that you can manage:
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-blue-500 mr-3"></div>
              <div>
                <strong className="text-gray-800">Page Sections</strong>
                <p className="text-sm text-gray-600">Content that appears on specific sections of your website</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-green-500 mr-3"></div>
              <div>
                <strong className="text-gray-800">Collection Items</strong>
                <p className="text-sm text-gray-600">Multiple entries like projects or blog posts</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full w-3 h-3 bg-purple-500 mr-3"></div>
              <div>
                <strong className="text-gray-800">Global Settings</strong>
                <p className="text-sm text-gray-600">Settings that apply to your entire website</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
        <h2 className="text-2xl font-bold mb-4 text-yellow-800">Need Help?</h2>
        <p className="text-yellow-700 mb-4">
          If you need assistance with editing your content or have questions about how to use Sanity,
          please contact your website administrator.
        </p>
        <div className="bg-white p-4 rounded border border-yellow-200">
          <h3 className="font-medium text-yellow-800 mb-2">Quick Tips</h3>
          <ul className="list-disc pl-5 text-yellow-700 space-y-1">
            <li>Changes are saved as drafts until you publish them</li>
            <li>Use the "Preview" button to see how changes will look before publishing</li>
            <li>You can revert to previous versions if needed</li>
            <li>Images can be uploaded directly in Sanity Studio</li>
            <li>Bookmark the Sanity Studio URL for easy access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
