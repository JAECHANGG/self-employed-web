import { PostByCategoryDto } from "../post/dto";

export interface UserDto {
  email: string;
  image: string;
  name: string;
  socialId: string;
  updatedAt: string;
  username: string;
  id: string;
  collections: PostByCategoryDto[];
}

export interface AddCollectionPayload {
  postId: string;
  userId: string;
}

export interface DeleteCollectionPayload {
  postId: string;
  userId: string;
}
