export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The title of your website (appears in browser tabs)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'A short description of your website for search engines',
      validation: (Rule: any) => Rule.max(160).warning('Description should be under 160 characters for SEO')
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for search engines',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Main logo used throughout the site'
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon shown in browser tabs (should be square)'
    },
    {
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      description: 'Image displayed when sharing the site on social media',
      options: {
        hotspot: true
      }
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Primary brand color (hex code)',
      validation: (Rule: any) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Must be a valid hex color code')
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      description: 'Secondary brand color (hex code)',
      validation: (Rule: any) => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Must be a valid hex color code')
    },
    {
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Google Analytics measurement ID (e.g., G-XXXXXXXXXX)'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Main contact email for the website'
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      description: 'Main contact phone number'
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'text',
      description: 'Physical address or location'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'social' }]
        }
      ],
      description: 'Social media profiles to display across the site'
    },
    {
      name: 'enableBlog',
      title: 'Enable Blog',
      type: 'boolean',
      description: 'Turn the blog section on or off',
      initialValue: true
    },
    {
      name: 'enableContactForm',
      title: 'Enable Contact Form',
      type: 'boolean',
      description: 'Turn the contact form on or off',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'logo'
    }
  }
}
