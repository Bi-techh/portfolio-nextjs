import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'GitHub', value: 'github'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Dribbble', value: 'dribbble'},
          {title: 'Behance', value: 'behance'},
          {title: 'Medium', value: 'medium'},
          {title: 'Dev.to', value: 'devto'},
          {title: 'Personal Website', value: 'website'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from icon library',
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
  },
})
