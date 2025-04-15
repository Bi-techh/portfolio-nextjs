import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  description: 'Configure the main hero section that appears at the top of your homepage',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline for the hero section (supports gradient styling in the UI)',
      validation: Rule => Rule.required(),
      initialValue: 'I design products that delight and inspire people.',
    }),
    defineField({
      name: 'titleStyle',
      title: 'Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the title text',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the main headline',
      initialValue: "Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.",
    }),
    defineField({
      name: 'subtitleStyle',
      title: 'Subtitle Style',
      type: 'textStyle',
      description: 'Apply custom styling to the subtitle text',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Text for the primary button',
      initialValue: 'Book a call',
      placeholder: 'e.g., Book a call, Contact Me, Get Started'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'URL or path for the primary button',
      initialValue: '/contact',
      placeholder: 'e.g., /contact, /about, #contact'
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
      description: 'Text for the secondary button (optional)',
      initialValue: 'Download CV',
      placeholder: 'e.g., Download CV, Learn More, View Portfolio'
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      description: 'URL or path for the secondary button',
      initialValue: '#',
      placeholder: 'e.g., /resume.pdf, https://example.com/cv.pdf'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      description: 'Profile image that appears on the right side of the hero section',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'profileImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || 'Homepage hero section',
        media,
      }
    },
  },
})
