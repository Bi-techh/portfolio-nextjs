import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textStyle',
  title: 'Text Style',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Select a color for this text',
      options: {
        list: [
          {title: 'Default', value: ''},
          {title: 'Primary', value: 'text-blue-600'},
          {title: 'Secondary', value: 'text-purple-600'},
          {title: 'Accent', value: 'text-amber-600'},
          {title: 'Success', value: 'text-green-600'},
          {title: 'Warning', value: 'text-yellow-600'},
          {title: 'Danger', value: 'text-red-600'},
          {title: 'Light', value: 'text-gray-200'},
          {title: 'Dark', value: 'text-gray-800'},
        ],
      },
    }),
    defineField({
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      description: 'Select a font family for this text',
      options: {
        list: [
          {title: 'System Default', value: 'inherit'},
          {title: 'Sans Serif', value: 'font-sans'},
          {title: 'Serif', value: 'font-serif'},
          {title: 'Monospace', value: 'font-mono'},
          {title: 'Inter', value: 'Inter, sans-serif'},
          {title: 'Roboto', value: 'Roboto, sans-serif'},
          {title: 'Poppins', value: 'Poppins, sans-serif'},
          {title: 'Playfair Display', value: 'Playfair Display, serif'},
        ],
      },
    }),
    defineField({
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      description: 'Font size with units (e.g., 16px, 1.5rem) or keywords (e.g., small, large)',
    }),
    defineField({
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'string',
      description: 'Select weight for this text',
      options: {
        list: [
          {title: 'Normal (400)', value: '400'},
          {title: 'Light (300)', value: '300'},
          {title: 'Medium (500)', value: '500'},
          {title: 'Semi-Bold (600)', value: '600'},
          {title: 'Bold (700)', value: '700'},
          {title: 'Extra Bold (800)', value: '800'},
          {title: 'Light', value: 'font-light'},
          {title: 'Normal', value: 'font-normal'},
          {title: 'Medium', value: 'font-medium'},
          {title: 'Semibold', value: 'font-semibold'},
          {title: 'Bold', value: 'font-bold'},
        ],
      },
    }),
    defineField({
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      description: 'Line height (spacing between lines). Use + and - buttons to adjust.',
      initialValue: 1.5,
    }),
    defineField({
      name: 'letterSpacing',
      title: 'Letter Spacing',
      type: 'number',
      description: 'Letter spacing (spacing between characters). Use + and - buttons to adjust.',
      initialValue: 0,
    }),
    defineField({
      name: 'textAlign',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
          {title: 'Justify', value: 'justify'},
        ],
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'marginTop',
      title: 'Top Margin',
      type: 'number',
      description: 'Space above the text. Use + and - buttons to adjust.',
      initialValue: 0,
    }),
    defineField({
      name: 'marginBottom',
      title: 'Bottom Margin',
      type: 'number',
      description: 'Space below the text. Use + and - buttons to adjust.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      color: 'textColor',
      font: 'fontFamily',
      size: 'fontSize',
      weight: 'fontWeight',
    },
    prepare(selection) {
      const {color, font, size, weight} = selection
      const styles = [
        color && 'Color: ' + color.replace('text-', '').replace('-', ' '),
        font && 'Font: ' + font.replace('font-', ''),
        size && 'Size: ' + size.replace('text-', ''),
        weight && 'Weight: ' + weight.replace('font-', ''),
      ].filter(Boolean)
      
      return {
        title: styles.length > 0 ? styles.join(' | ') : 'Default Style',
      }
    },
  },
})
