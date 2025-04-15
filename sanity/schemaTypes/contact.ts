import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  description: 'Configure the contact section where visitors can reach out to you',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main title for the contact section',
      validation: Rule => Rule.required(),
      initialValue: 'Get In Touch',
      placeholder: 'e.g., Get In Touch, Contact Me, Let\'s Talk'
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
      description: 'Supporting text below the section title',
      initialValue: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
      placeholder: 'Brief description encouraging visitors to contact you'
    }),
    defineField({
      name: 'subtitleStyle',
      title: 'Subtitle Style',
      type: 'textStyle',
      description: 'Apply custom styling to the section subtitle',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Your contact email address',
      initialValue: 'contact@example.com',
      placeholder: 'e.g., contact@example.com',
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: 'emailStyle',
      title: 'Email Style',
      type: 'textStyle',
      description: 'Apply custom styling to the email address',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Your contact phone number',
      initialValue: '+1 (555) 123-4567',
      placeholder: 'e.g., +1 (555) 123-4567'
    }),
    defineField({
      name: 'phoneStyle',
      title: 'Phone Style',
      type: 'textStyle',
      description: 'Apply custom styling to the phone number',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      description: 'Your physical address or location',
      initialValue: '123 Main Street\nNew York, NY 10001\nUnited States',
      placeholder: 'Your office or business address'
    }),
    defineField({
      name: 'addressStyle',
      title: 'Address Style',
      type: 'textStyle',
      description: 'Apply custom styling to the address',
    }),
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      description: 'Title above the contact form',
      initialValue: 'Send Me a Message',
      placeholder: 'e.g., Send Me a Message, Contact Form, Drop a Line'
    }),
    defineField({
      name: 'formTitleStyle',
      title: 'Form Title Style',
      type: 'textStyle',
      description: 'Apply custom styling to the form title',
    }),
    defineField({
      name: 'formSubtitle',
      title: 'Form Subtitle',
      type: 'text',
      description: 'Text explaining the contact form',
      initialValue: 'Fill out the form below and I\'ll get back to you as soon as possible.',
      placeholder: 'Brief instructions for using the contact form'
    }),
    defineField({
      name: 'formSubtitleStyle',
      title: 'Form Subtitle Style',
      type: 'textStyle',
      description: 'Apply custom styling to the form subtitle',
    }),
    defineField({
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      description: 'Text for the form submit button',
      initialValue: 'Send Message',
      placeholder: 'e.g., Send Message, Submit, Get in Touch'
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      description: 'Message shown after successful form submission',
      initialValue: 'Your message has been sent. Thank you!',
      placeholder: 'Confirmation message after form submission'
    }),
    defineField({
      name: 'successMessageStyle',
      title: 'Success Message Style',
      type: 'textStyle',
      description: 'Apply custom styling to the success message',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      description: 'Optional background image for the contact section (recommended size: 1920x1080px)'
    }),
    defineField({
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      description: 'Image to display in the contact section (e.g., a photo of you working or your office, recommended size: 600x800px)'
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'email',
      media: 'contactImage'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection;
      return {
        title: title || 'Contact Section',
        subtitle: subtitle,
        media
      };
    },
  },
})
