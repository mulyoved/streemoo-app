export default {
  type: 'object',
  name: 'FPSubscribe',
  title: 'FPSubscribe',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Subscribe section',
      }
    },
  },
}
