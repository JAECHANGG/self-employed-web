import { PostByIdDto } from "@/types/post/dto";

export const sortPostByIdDtoByCreatedAtDesc = (
  a: PostByIdDto,
  b: PostByIdDto
) => {
  return a.createdAt > b.createdAt ? -1 : 1;
};
