export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {title: 'Id', name: 'id', type: 'string'},
    {title: 'Title', name: 'title', type: 'string'},
    {title: 'BoardCategory', name: 'boardCategory', type: 'string'},
    {title: 'Content', name: 'content', type: 'string'},
    {title: 'CreatedAt', name: 'createdAt', type: 'string'},
    {title: 'Author', name: 'author', type: 'reference', to: [{type: 'user'}]},
    {title: 'Photos', name: 'photos', type: 'array', of: [{type: 'image'}]},
    {
      title: 'Likes',
      name: 'likes',
      type: 'number',
    },
    {
      title: 'View',
      name: 'view',
      type: 'number',
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {title: 'Author', name: 'author', type: 'reference', to: [{type: 'user'}]},
            {title: 'Comment', name: 'comment', type: 'string'},
            {title: 'CreatedAt', name: 'createdAt', type: 'string'},
            {
              title: 'Likes',
              name: 'likes',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
}
