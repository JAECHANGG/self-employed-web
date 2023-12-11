import { PostByCategoryDto, PostByIdDto } from "@/types/post/dto";

export const convertPostByIdDtoToPostByCategoryDto = (
  postByIdDto: PostByIdDto
): PostByCategoryDto => {
  return {
    commentNumber: postByIdDto.comments.length,
    content: postByIdDto.content,
    createdAt: postByIdDto.createdAt,
    id: postByIdDto.id,
    likeNumber: postByIdDto.like.length,
    title: postByIdDto.title,
    username: postByIdDto.user.username,
    view: postByIdDto.view,
    category: postByIdDto.category,
  };
};
