import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience Section',
  type: 'document',
  description: 'Configure your work experience and professional history',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the experience section',
      validation: Rule => Rule.required(),
      initialValue: 'Work Experience',
      placeholder: 'e.g., Work Experience, Professional Journey, Career Path'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the section title',
      initialValue: 'My professional background and the companies I\'ve worked with.',
      placeholder: 'Brief overview of your professional journey'
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      description: 'Add your work experience in reverse chronological order (most recent first)',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Job Position',
          fields: [
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
              description: 'Your job title or role',
              validation: Rule => Rule.required(),
              initialValue: 'Senior Web Developer',
              placeholder: 'e.g., Senior Web Developer, UX Designer, Project Manager'
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              description: 'Name of the company or organization',
              validation: Rule => Rule.required(),
              initialValue: 'Acme Corporation',
              placeholder: 'e.g., Acme Corporation, Google, Freelance'
            }),
            defineField({
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'image',
              description: 'Logo of the company (recommended size: 200x200px, transparent background)',
              options: {
                hotspot: true,
                storeOriginalFilename: true,
              },
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
              description: 'When you started this position (month and year)',
              options: {
                dateFormat: 'YYYY-MM'
              },
              initialValue: '2020-01'
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM'
              },
              description: 'When you left this position (leave empty if this is your current job)'
            }),
            defineField({
              name: 'isCurrent',
              title: 'Current Position',
              type: 'boolean',
              description: 'Check if this is your current position',
              initialValue: false
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
              description: 'Describe your responsibilities and achievements (use bullet points for better readability)',
            }),
            defineField({
              name: 'technologies',
              title: 'Technologies Used',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'List the technologies, tools, or skills you used in this role',
              options: {
                layout: 'tags'
              }
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'City and country where you worked',
              initialValue: 'New York, USA',
              placeholder: 'e.g., New York, USA, Remote'
            }),
          ],
          preview: {
            select: {
              title: 'position',
              subtitle: 'company',
              media: 'companyLogo',
              startDate: 'startDate',
              endDate: 'endDate',
              isCurrent: 'isCurrent'
            },
            prepare({ title, subtitle, media, startDate, endDate, isCurrent }) {
              const dateRange = startDate ? 
                `${new Date(startDate).getFullYear()} - ${isCurrent ? 'Present' : endDate ? new Date(endDate).getFullYear() : ''}` : '';
              
              return {
                title: title || 'Job Position',
                subtitle: subtitle ? `${subtitle}${dateRange ? ' | ' + dateRange : ''}` : dateRange,
                media
              }
            }
          }
        })
      ]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      description: 'Optional background image for the experience section (recommended size: 1920x1080px)'
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'subtitle',
      media: 'backgroundImage'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Experience Section',
        subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : 'Your professional background',
        media
      }
    }
  }
})
