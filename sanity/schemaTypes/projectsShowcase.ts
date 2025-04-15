import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'projectsShowcase',
  title: 'Projects Showcase Section',
  type: 'document',
  description: 'Configure how your portfolio projects are displayed on the website',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the projects showcase section',
      validation: Rule => Rule.required(),
      initialValue: 'My Projects',
      placeholder: 'e.g., My Projects, Portfolio, Recent Work'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the section title (optional)',
      initialValue: 'Explore my recent projects and see how I can help bring your ideas to life.',
      placeholder: 'Briefly describe your project approach or highlight your expertise'
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'project'},
          description: 'Select a project to feature'
        })
      ],
      description: 'Select specific projects to feature in this section. These will appear first in the showcase. You can add projects in the "Projects" section of the sidebar.',
    }),
    defineField({
      name: 'showFeaturedOnly',
      title: 'Show Featured Projects Only',
      type: 'boolean',
      description: 'If enabled, only the projects you selected above will be shown. If disabled, other projects will be shown after the featured ones.',
      initialValue: true,
    }),
    defineField({
      name: 'numberOfProjects',
      title: 'Number of Projects',
      type: 'number',
      description: 'Maximum number of projects to display on the homepage (you can create more projects, but only this many will show initially)',
      initialValue: 6,
      validation: Rule => Rule.min(1).max(12)
    }),
    defineField({
      name: 'viewAllButtonText',
      title: 'View All Button Text',
      type: 'string',
      description: 'Text for the button that links to the full projects page',
      initialValue: 'View All Projects',
      placeholder: 'e.g., View All Projects, See More Work, Explore Portfolio'
    }),
    defineField({
      name: 'viewAllButtonLink',
      title: 'View All Button Link',
      type: 'string',
      description: 'URL for the view all button (usually /projects or a similar path)',
      initialValue: '/projects',
      placeholder: '/projects'
    }),
    defineField({
      name: 'filterByCategories',
      title: 'Enable Category Filtering',
      type: 'boolean',
      description: 'If enabled, visitors can filter projects by category using buttons above the project grid',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Projects Showcase Section',
        subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : 'Configure how projects are displayed',
      }
    }
  },
})
