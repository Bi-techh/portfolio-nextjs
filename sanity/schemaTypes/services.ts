import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Section',
  type: 'document',
  description: 'Configure the services section to showcase what you offer to clients',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the services section',
      validation: Rule => Rule.required(),
      initialValue: 'Services I Offer',
      placeholder: 'e.g., Services I Offer, What I Do, My Expertise'
    }),
    defineField({
      name: 'sectionTitleStyle',
      title: 'Section Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the section title',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the section title (optional)',
      initialValue: 'I provide end-to-end solutions tailored to your business needs, helping you establish a strong online presence.',
      placeholder: 'Briefly describe the overall value of your services'
    }),
    defineField({
      name: 'subtitleStyle',
      title: 'Subtitle Style',
      type: 'textStyle',
      description: 'Apply custom styling to the section subtitle',
    }),
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      description: 'Add all the services you offer. Each service will appear as a card on the website.',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Service',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              description: 'Name of the service you offer',
              validation: Rule => Rule.required(),
              initialValue: 'Web Design',
              placeholder: 'e.g., Web Design, UI/UX Design, Mobile App Development'
            }),
            defineField({
              name: 'titleStyle',
              title: 'Title Style',
              type: 'textStyle',
              description: 'Apply custom styling to this service title',
            }),
            defineField({
              name: 'description',
              title: 'Service Description',
              type: 'text',
              description: 'Brief description of what this service includes (2-3 sentences)',
              initialValue: 'I create beautiful, responsive websites that look great on all devices. My designs focus on user experience and conversion optimization.',
              placeholder: 'Describe what this service includes and its benefits to clients'
            }),
            defineField({
              name: 'descriptionStyle',
              title: 'Description Style',
              type: 'textStyle',
              description: 'Apply custom styling to this service description',
            }),
            defineField({
              name: 'icon',
              title: 'Service Icon',
              type: 'image',
              options: {
                hotspot: true,
                storeOriginalFilename: true,
              },
              description: 'Upload an icon representing this service (recommended size: 64x64px, PNG with transparency)',
            }),
            defineField({
              name: 'iconCode',
              title: 'Icon Code (SVG)',
              type: 'text',
              description: 'Alternative to image: paste SVG code here. This will be used instead of the image if provided.',
              placeholder: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>'
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'icon',
            },
            prepare(selection) {
              const {title, subtitle, media} = selection;
              return {
                title: title || 'Service',
                subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : '',
                media,
              };
            },
          },
        })
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'subtitle',
    },
    prepare(selection) {
      const {title, subtitle} = selection;
      return {
        title: title || 'Services Section',
        subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : '',
      };
    },
  },
})
