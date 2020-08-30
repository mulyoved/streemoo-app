import React from 'react'

export default {
  type: 'object',
  name: 'gridImage',
  title: 'gridImage',
  fields: [
    {
      name: 'width',
      type: 'string',
      title: 'Default width in pixels',
    },
    {
      name: 'gridColumn',
      type: 'string',
      title: 'Grid column',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      width: 'width',
      gridColumn: 'gridColumn',
      media: 'image',
      imageUrl: 'asset.url',
    },
    prepare({ media, width, gridColumn, imageUrl }) {
      return {
        title: `Image: ${media.caption}`,
        subtitle: `Image width:${width} column:${gridColumn}`,
        media: <img src={imageUrl} alt={media.caption} />,
      }
    },
  },
}
