import { UserDto } from "../user/dto";

export interface CreatePostPayload {
  title: string;
  category: string;
  content: string;
  socialId: string;
}

export interface UpdatePostPayload {
  title: string;
  category: string;
  content: string;
  id: string;
}

export interface CreateCommentPayload {
  comment: string;
  userId: string;
  postId: string;
}

export interface DeleteCommentPayload {
  postId: string;
  commentId: string;
}

export interface LikePostPayload {
  postId: string;
  user: UserDto;
}

export interface UnlikePostPayload {
  postId: string;
  user: UserDto;
}

export interface LikeCommentPayload {
  postId: string;
  commentId: string;
  user: UserDto;
}

export interface UnlikeCommentPayload {
  postId: string;
  commentId: string;
  user: UserDto;
}

export interface IncreaseViewPayload {
  postId: string;
}

export interface CreateReplyPayload {
  postId: string;
  commentId: string;
  reply: string;
  userId: string;
}

export interface DeleteReplyPayload {
  postId: string;
  commentId: string;
  replyId: string;
}

export interface LikeReplyPayload {
  postId: string;
  commentId: string;
  replyId: string;
  user: UserDto;
}

export interface UnlikeReplyPayload {
  postId: string;
  commentId: string;
  replyId: string;
  user: UserDto;
}
