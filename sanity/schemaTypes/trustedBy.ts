export default {
  name: 'trustedBy',
  title: 'Trusted By Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Title for the trusted by section (e.g., "Trusted by")',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for this section',
    },
    {
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Company Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'logo',
              title: 'Company Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Logo of the company',
            },
            {
              name: 'logoSvg',
              title: 'Logo SVG Code',
              type: 'text',
              description: 'Alternative to image: paste SVG code here',
            },
            {
              name: 'url',
              title: 'Company Website',
              type: 'url',
              description: 'Optional link to company website',
            }
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Trusted By Section',
      }
    }
  },
}
