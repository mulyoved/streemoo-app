import client from 'part:@sanity/base/client'

export default {
  name: 'show',
  type: 'document',
  title: 'Show',
  fields: [
    {
      title: 'Artist',
      name: 'artist',
      type: 'reference',
      to: [{ type: 'artist' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: async (doc) => {
          if (!doc.artist) {
            return doc.name
          }
          const artist = await client.getDocument(doc.artist._ref)
          return `${artist.name}-${doc.name}`
        },
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      artist: 'artist.name',
      media: 'image',
    },
    prepare({ title, artist, subtitle, media }) {
      return {
        title: `${artist} - ${title}`,
        subtitle: 'Show',
        media,
      }
    },
  },
}
