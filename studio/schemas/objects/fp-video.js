export default {
  type: 'object',
  name: 'FPVideo',
  title: 'FPVideo',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Video Url',
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
      url: 'url',
    },
    prepare({ title, url }) {
      return {
        title,
        subtitle: url,
      }
    },
  },
}
