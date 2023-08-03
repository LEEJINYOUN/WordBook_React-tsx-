export default {
  title: 'Board',
  name: 'board',
  type: 'document',
  fields: [
    {
      title: 'Writer',
      name: 'writer',
      type: 'string',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
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
      title: 'title',
    },
    prepare(selection) {
      const {writerName, title} = selection
      return {
        title,
        subtitle: writerName,
      }
    },
  },
}
