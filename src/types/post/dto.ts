import { UserDto } from "../user/dto";

export interface PostByIdDto {
  comments: CommentDto[];
  content: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  id: string;
  like: UserDto[];
  title: string;
  user: UserDto;
  view: number;
}

export interface PostByCategoryDto {
  commentNumber: number;
  content: string;
  createdAt: string;
  id: string;
  likeNumber: number;
  title: string;
  username: string;
  view: number;
  category: string;
}

export interface CommentDto {
  id: string;
  user: UserDto;
  comment: string;
  like: UserDto[];
  createdAt: string;
  replies: ReplyDto[];
}

export interface PostIdDto {
  id: string;
}

export interface ReplyDto {
  id: string;
  user: UserDto;
  reply: string;
  like: UserDto[];
  createdAt: string;
}
