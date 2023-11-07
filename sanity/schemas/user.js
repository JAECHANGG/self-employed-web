export default {
  title: 'User', // sanity studio 에서 보이는 이름
  name: 'user', // 실제 DB에서 핸들링하는 이름
  type: 'document',
  fields: [
    {
      title: 'Id',
      name: 'id',
      type: 'string',
    },
    {
      title: 'Username',
      name: 'username',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    // //! TODO schema 추후 작성하기
    // {
    //   title: 'Notifications',
    //   name: 'notifications',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'notification'}]}], // notification type의 reference를 가질 수 있음
    //   validation: (Rule) => Rule.unique(),
    // },
    // //! TODO schema 추후 작성하기
    // {
    //   title: 'Bookmarks',
    //   name: 'bookmarks',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'bookmark'}]}],
    //   validation: (Rule) => Rule.unique(),
    // },
    // TODO 나의 게시글을 모아 볼건지?에 따라 게시글 데이터 reference 필요할 듯
  ],
}
