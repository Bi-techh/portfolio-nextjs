import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your full name as it will appear on the website',
      validation: (Rule) => Rule.required(),
      initialValue: 'John Doe',
      placeholder: 'e.g., John Doe',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your professional title or role',
      validation: (Rule) => Rule.required(),
      initialValue: 'Web Developer & Designer',
      placeholder: 'e.g., Web Developer, UX Designer, Marketing Specialist',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Upload a professional headshot (recommended size: 500x500px)',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'A brief introduction that appears in the hero section (50-100 words)',
      validation: (Rule) => Rule.required().min(50).max(300),
      initialValue: 'I am a passionate web developer with expertise in creating beautiful, functional websites that help businesses grow online.',
      placeholder: 'Write a brief, engaging introduction about yourself...',
    }),
    defineField({
      name: 'shortBioStyle',
      title: 'Short Bio Styling',
      type: 'textStyle',
      description: 'Apply styling to the short bio text',
    }),
    defineField({
      name: 'longBio',
      title: 'Long Bio',
      type: 'styledText',
      description: 'A detailed biography for the about section. You can format text, add headings, and links.',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Your contact email address',
      initialValue: 'contact@example.com',
      placeholder: 'e.g., contact@example.com',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Your contact phone number',
      initialValue: '+1 (555) 123-4567',
      placeholder: 'e.g., +1 (555) 123-4567',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Your city and country',
      initialValue: 'New York, USA',
      placeholder: 'e.g., New York, USA',
    }),
    defineField({
      name: 'resumeURL',
      title: 'Resume URL',
      type: 'url',
      description: 'Link to your downloadable resume/CV (PDF recommended)',
      placeholder: 'https://example.com/resume.pdf',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      description: 'Add links to your social media profiles',
      of: [{type: 'reference', to: {type: 'social'}}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'profileImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    }
  },
})
