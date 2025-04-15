import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  description: 'Configure the website footer with logo, links, and copyright information',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      description: 'Logo to display in the footer (recommended size: 180x60px, transparent background)'
    }),
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      description: 'Text to display alongside the logo',
      initialValue: 'Your Name',
      placeholder: 'e.g., Your Name, Company Name, Brand Name'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      description: 'Short description or tagline in the footer',
      initialValue: 'Creating beautiful digital experiences that help businesses grow.',
      placeholder: 'Brief description of what you do or your brand promise'
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'Copyright notice text that appears at the bottom of the page',
      initialValue: ' 2025 Your Name. All Rights Reserved.',
      placeholder: 'e.g.,  2025 Your Name. All Rights Reserved.'
    }),
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      description: 'Main navigation links in the footer',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Navigation Link',
          fields: [
            defineField({
              name: 'text',
              title: 'Link Text',
              type: 'string',
              description: 'The visible text for this link',
              validation: Rule => Rule.required(),
              initialValue: 'Home',
              placeholder: 'e.g., Home, About, Services, Contact'
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'string',
              description: 'Where this link should go (use # for section links)',
              validation: Rule => Rule.required(),
              initialValue: '/',
              placeholder: 'e.g., /, /about, #contact'
            })
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'Link',
                subtitle: subtitle
              }
            }
          },
        })
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Social media links to display in the footer (add these in the Social Links section first)',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'social' }],
          description: 'Select a social media profile'
        })
      ],
    }),
    defineField({
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      description: 'Additional columns of links in the footer (e.g., Services, Resources, Legal)',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Footer Column',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              description: 'Heading for this group of links',
              validation: Rule => Rule.required(),
              initialValue: 'Services',
              placeholder: 'e.g., Services, Resources, Legal'
            }),
            defineField({
              name: 'links',
              title: 'Column Links',
              type: 'array',
              description: 'Links to include in this column',
              of: [
                defineArrayMember({
                  type: 'object',
                  title: 'Link',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Link Text',
                      type: 'string',
                      description: 'The visible text for this link',
                      validation: Rule => Rule.required(),
                      initialValue: 'Web Design',
                      placeholder: 'e.g., Web Design, Privacy Policy, Blog'
                    }),
                    defineField({
                      name: 'url',
                      title: 'Link URL',
                      type: 'string',
                      description: 'Where this link should go',
                      validation: Rule => Rule.required(),
                      initialValue: '/services/web-design',
                      placeholder: 'e.g., /services, /blog, /privacy-policy'
                    })
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'url',
                    },
                    prepare({title, subtitle}) {
                      return {
                        title: title || 'Link',
                        subtitle: subtitle
                      }
                    }
                  },
                })
              ],
            })
          ],
          preview: {
            select: {
              title: 'title',
              links: 'links',
            },
            prepare({title, links}) {
              return {
                title: title || 'Column',
                subtitle: links ? `${links.length} links` : 'No links'
              }
            }
          },
        })
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Background color for the footer (use hex code)',
      initialValue: '#1f2937',
      placeholder: 'e.g., #1f2937, #000000'
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Text color for the footer (use hex code)',
      initialValue: '#ffffff',
      placeholder: 'e.g., #ffffff, #f3f4f6'
    }),
  ],
  preview: {
    select: {
      title: 'logoText',
      media: 'logo'
    },
    prepare({title, media}) {
      return {
        title: 'Footer Section',
        subtitle: title || 'Website footer configuration',
        media
      }
    }
  },
})
