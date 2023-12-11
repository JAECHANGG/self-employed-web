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

export interface GetSearchKeywordDto {
  id: string;
  keyword: string;
  createdAt: string;
  updatedAt: string;
}
