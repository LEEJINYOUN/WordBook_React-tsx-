export default {
  title: 'Word',
  name: 'word',
  type: 'document',
  fields: [
    {
      title: 'Writer',
      name: 'writer',
      type: 'string',
    },
    {
      title: 'EnWord',
      name: 'enWord',
      type: 'string',
    },
    {
      title: 'KrWord',
      name: 'krWord',
      type: 'string',
    },
    {
      title: 'Bookmark',
      name: 'bookmark',
      type: 'boolean',
    },
    {
      title: 'Today',
      name: 'today',
      type: 'string',
    },
  ],
  preview: {
    select: {
      writerName: 'writer',
      enWord: 'enWord',
      krWord: 'krWord',
    },
    prepare(selection) {
      const {writerName, enWord, krWord} = selection
      return {
        title: `${enWord} (${krWord})`,
        subtitle: writerName,
      }
    },
  },
}
