export default {
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo to display in the navigation bar',
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      description: 'Text to display alongside the logo',
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Menu Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Link URL',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'isButton',
              title: 'Display as Button',
              type: 'boolean',
              description: 'If enabled, this menu item will appear as a button',
              initialValue: false,
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'submenu',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Submenu Text',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'url',
                      title: 'Link URL',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'openInNewTab',
                      title: 'Open in New Tab',
                      type: 'boolean',
                      initialValue: false,
                    }
                  ],
                  preview: {
                    select: {
                      title: 'text',
                      subtitle: 'url',
                    },
                  },
                }
              ],
            }
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
            },
          },
        }
      ],
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'string',
        },
        {
          name: 'openInNewTab',
          title: 'Open in New Tab',
          type: 'boolean',
          initialValue: false,
        }
      ],
      description: 'Optional call-to-action button in the navigation',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation Bar',
      }
    }
  },
}
