export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Nickname',
      name: 'nickname',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Password',
      name: 'password',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'nickname',
    },
  },
}
