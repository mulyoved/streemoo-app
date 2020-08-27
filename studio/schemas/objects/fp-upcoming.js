export default {
  type: 'object',
  name: 'FPUpcoming',
  title: 'FPUpcoming',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'figure',
          title: 'Image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Upcoming section',
      }
    },
  },
}
