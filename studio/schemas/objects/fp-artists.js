export default {
  type: 'object',
  name: 'FPArtists',
  title: 'FPArtists',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'gridImage',
          title: 'Image',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: false,
      },
    },
    {
      name: 'lineImage',
      type: 'image',
      title: 'Line image',
      options: {
        hotspot: false,
      },
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Artists section',
      }
    },
  },
}
