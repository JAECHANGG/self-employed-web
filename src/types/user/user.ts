import { PostByCategoryDto } from "../post/dto";

export interface AddCollection {
  post: PostByCategoryDto;
  userId: string;
}

export interface DeleteCollection {
  post: PostByCategoryDto;
  userId: string;
}

export interface SearchKeyword {
  id: string;
  keyword: string;
  createdAt: string;
  updatedAt: string;
}
