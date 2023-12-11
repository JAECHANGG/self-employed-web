export interface UpdateUserPayload {
  username: string;
}
export interface AddCollectionPayload {
  postId: string;
  userId: string;
}

export interface DeleteCollectionPayload {
  postId: string;
  userId: string;
}

export interface AddSearchKeywordPayload {
  userId: string;
  keyword: string;
}

export interface GetSearchKeywordsPayload {
  userId: string;
}

export interface DeleteSearchKeywordPayload {
  userId: string;
  keywordId: string;
}

export interface DeleteSearchKeywordsAllPayload {
  userId: string;
}
