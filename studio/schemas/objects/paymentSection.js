export default {
  type: 'object',
  name: 'paymentSection',
  title: 'Payment Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
    },
    prepare({ heading }) {
      return {
        title: `${heading} + Payment Section`,
        subtitle: '',
      }
    },
  },
}
