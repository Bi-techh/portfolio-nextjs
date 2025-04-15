import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  description: 'Add individual portfolio projects to showcase your work',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the project',
      validation: (Rule) => Rule.required(),
      placeholder: 'e.g., E-commerce Website Redesign',
    }),
    defineField({
      name: 'titleStyle',
      title: 'Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the project title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title (auto-generated, but you can edit it)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'styledText',
      description: 'Brief summary of the project (2-3 paragraphs)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionStyle',
      title: 'Description Style',
      type: 'textStyle',
      description: 'Apply custom styling to the project description',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Featured image for this project (recommended size: 1200x800px)',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      description: 'Additional images showcasing different aspects of the project',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            storeOriginalFilename: true,
          },
        }
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Select categories that apply to this project (helps with filtering)',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'List the technologies, tools, or skills used in this project (e.g., React, Node.js, Figma)',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'technologiesStyle',
      title: 'Technologies Style',
      type: 'textStyle',
      description: 'Apply custom styling to the technologies',
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      description: 'Link to a live demo of the project (if available)',
      placeholder: 'https://example.com',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the project repository (if public)',
      placeholder: 'https://github.com/username/project',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this project to appear in featured sections of the website',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'When the project was completed or published',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the client (if applicable)',
      placeholder: 'e.g., Acme Corporation',
    }),
    defineField({
      name: 'clientNameStyle',
      title: 'Client Name Style',
      type: 'textStyle',
      description: 'Apply custom styling to the client name',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection;
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle ? (subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle) : '',
        media: media,
      };
    },
  },
})
