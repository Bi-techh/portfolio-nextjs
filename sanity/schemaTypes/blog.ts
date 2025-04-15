import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleStyle',
      title: 'Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the blog post title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'about'},
    }),
    defineField({
      name: 'authorStyle',
      title: 'Author Style',
      type: 'textStyle',
      description: 'Apply custom styling to the author name',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Brief summary of the blog post (shown in blog cards)',
    }),
    defineField({
      name: 'excerptStyle',
      title: 'Excerpt Style',
      type: 'textStyle',
      description: 'Apply custom styling to the blog excerpt',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'styledText',
      description: 'Full content of the blog post with rich text formatting',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as featured to highlight it on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'readingTime',
      title: 'Read Time (minutes)',
      type: 'number',
      description: 'Estimated time to read the article in minutes',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, author, media} = selection;
      return {
        title: title || 'Untitled Post',
        subtitle: author && `By ${author}`,
        media: media,
      };
    },
  },
})
