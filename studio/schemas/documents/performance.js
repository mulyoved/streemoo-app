import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default {
  name: 'performance',
  type: 'document',
  title: 'Performance',
  fields: [
    {
      title: 'Show',
      name: 'show',
      type: 'reference',
      to: [{ type: 'show' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 10,
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Description (Ignored for now)',
    },
    {
      name: 'notes',
      type: 'string',
      title: 'Notes',
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
    },
  ],
  preview: {
    select: {
      date: 'date',
      show: 'show.name',
      artist: 'show.artist.name',
      media: 'show.image',
    },
    prepare({ date, artist, show, media }) {
      return {
        title: `${format(parseISO(date), 'yyyy-MM-dd HH:mm')}`,
        subtitle: `${artist} - ${show}`,
        media,
      }
    },
  },
}
