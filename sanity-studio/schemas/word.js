export default {
  title: 'Word',
  name: 'word',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
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
      authorName: 'author.name',
      enWord: 'enWord',
      krWord: 'krWord',
    },
    prepare(selection) {
      const {authorName, enWord, krWord} = selection
      return {
        title: `${enWord} (${krWord})`,
        subtitle: authorName,
      }
    },
  },
}
