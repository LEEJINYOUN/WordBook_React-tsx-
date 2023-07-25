export default {
  title: 'Quiz',
  name: 'quiz',
  type: 'document',
  fields: [
    {
      title: 'Writer',
      name: 'writer',
      type: 'string',
    },
    {
      title: 'Today',
      name: 'today',
      type: 'string',
    },
    {
      title: 'Matched',
      name: 'matched',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'enWord'},
            {type: 'string', name: 'krWord'},
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'NotMatched',
      name: 'notMatched',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {type: 'string', name: 'enWord'},
            {type: 'string', name: 'krWord'},
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'writer',
      subtitle: 'today',
    },
  },
}
