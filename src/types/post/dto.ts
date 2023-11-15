import { AuthorDto } from "../author/dto";

export interface PostByIdDto {
  comments: [];
  content: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  _id: string;
  like: number;
  title: string;
  author: AuthorDto;
  view: number;
}

export interface PostByCategoryDto {
  commentNumber: number;
  content: string;
  createdAt: string;
  id: string;
  like: number;
  title: string;
  username: string;
  view: number;
}
