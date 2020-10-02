export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description (Ignored for now)',
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
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug',
      media: 'image',
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: slug.current,
        media,
      }
    },
  },
}
