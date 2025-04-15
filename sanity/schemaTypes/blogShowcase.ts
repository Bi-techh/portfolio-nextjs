export default {
  name: 'blogShowcase',
  title: 'Blog Showcase Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the blog showcase section',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the section title',
    },
    {
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'blog'}
        }
      ],
      description: 'Select specific blog posts to feature in this section',
    },
    {
      name: 'showLatest',
      title: 'Show Latest Posts',
      type: 'boolean',
      description: 'If enabled, will automatically show the latest posts',
      initialValue: true,
    },
    {
      name: 'numberOfPosts',
      title: 'Number of Posts',
      type: 'number',
      description: 'Number of posts to display if showing latest',
      initialValue: 3,
      validation: Rule => Rule.min(1).max(10)
    },
    {
      name: 'viewAllButtonText',
      title: 'View All Button Text',
      type: 'string',
      description: 'Text for the button that links to all blog posts',
      initialValue: 'View All Posts',
    },
    {
      name: 'viewAllButtonLink',
      title: 'View All Button Link',
      type: 'string',
      description: 'URL for the view all button',
      initialValue: '/blog',
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Blog Showcase Section',
      }
    }
  },
}
