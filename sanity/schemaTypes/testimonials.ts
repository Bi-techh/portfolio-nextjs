import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the testimonials section',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleStyle',
      title: 'Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the section title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      description: 'Supporting text below the main heading',
    }),
    defineField({
      name: 'subtitleStyle',
      title: 'Subtitle Style',
      type: 'textStyle',
      description: 'Apply custom styling to the section subtitle',
    }),
    defineField({
      name: 'testimonialsList',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'quote',
              title: 'Testimonial Quote',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'quoteStyle',
              title: 'Quote Style',
              type: 'textStyle',
              description: 'Apply custom styling to this testimonial quote',
            }),
            defineField({
              name: 'name',
              title: 'Client Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'nameStyle',
              title: 'Name Style',
              type: 'textStyle',
              description: 'Apply custom styling to the client name',
            }),
            defineField({
              name: 'position',
              title: 'Client Position',
              type: 'string',
            }),
            defineField({
              name: 'positionStyle',
              title: 'Position Style',
              type: 'textStyle',
              description: 'Apply custom styling to the client position',
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
            }),
            defineField({
              name: 'companyStyle',
              title: 'Company Style',
              type: 'textStyle',
              description: 'Apply custom styling to the company name',
            }),
            defineField({
              name: 'image',
              title: 'Client Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              description: 'Rating from 1-5 stars',
              validation: Rule => Rule.min(1).max(5).precision(1),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'quote',
              media: 'image',
            },
            prepare(selection) {
              const {title, subtitle, media} = selection;
              return {
                title: title || 'Unnamed Testimonial',
                subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : '',
                media: media,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'displayStyle',
      title: 'Display Style',
      type: 'string',
      options: {
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Grid', value: 'grid'},
          {title: 'List', value: 'list'},
        ],
      },
      initialValue: 'carousel',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'bg-white'},
          {title: 'Light Gray', value: 'bg-gray-50'},
          {title: 'Light Blue', value: 'bg-blue-50'},
          {title: 'Light Purple', value: 'bg-purple-50'},
        ],
      },
      initialValue: 'bg-gray-50',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      testimonials: 'testimonialsList',
    },
    prepare(selection) {
      const {title, testimonials} = selection;
      const count = testimonials?.length || 0;
      return {
        title: title || 'Testimonials Section',
        subtitle: `${count} testimonial${count === 1 ? '' : 's'}`,
      };
    },
  },
})
