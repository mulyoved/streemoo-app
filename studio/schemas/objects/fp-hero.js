export default {
  type: 'object',
  name: 'FPHero',
  title: 'FPHero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: false,
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Hero section',
      }
    },
  },
}
