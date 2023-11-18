export interface CreatePostPayload {
  title: string;
  category: string;
  content: string;
  user: string;
}

export interface UpdatePostPayload {
  title: string;
  category: string;
  content: string;
  id: string;
}

export interface CreateCommentPayload {
  comment: string;
  user: string;
  id: string;
}

export interface DeleteCommentPayload {
  postId: string;
  commentId: string;
}

export interface LikePostPayload {
  postId: string;
  userId: string;
}

export interface UnlikePostPayload {
  postId: string;
  userId: string;
}

export interface LikeCommentPayload {
  postId: string;
  commentId: string;
  userId: string;
}

export interface UnlikeCommentPayload {
  postId: string;
  commentId: string;
  userId: string;
}

export interface IncreaseViewPayload {
  postId: string;
}
