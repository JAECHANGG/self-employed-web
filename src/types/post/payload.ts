export interface CreatePostPayload {
  title: string;
  category: string;
  content: string;
  author: string;
}

export interface UpdatePostPayload {
  title: string;
  category: string;
  content: string;
  id: string;
}
