export default {
  type: 'object',
  name: 'responsiveGrid',
  title: 'Grid',
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
    {
      name: 'imagesSize',
      title: 'Images Size (JSON)',
      type: 'string',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `${heading}`,
        subtitle: 'Grid',
        media,
      }
    },
  },
}
