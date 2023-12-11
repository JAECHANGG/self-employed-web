import { PostByCategoryDto, PostByIdDto, PostIdDto } from "@/types/post/dto";
import {
  CreateCommentPayload,
  CreatePostPayload,
  CreateReplyPayload,
  DeleteCommentPayload,
  DeleteReplyPayload,
  IncreaseViewPayload,
  LikeCommentPayload,
  LikePostPayload,
  LikeReplyPayload,
  SearchPostPayload,
  UnlikeCommentPayload,
  UnlikePostPayload,
  UnlikeReplyPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetAllPosts = "/post",
  GetPostById = "/post",
  GetPostsByCategory = "/post/category",
  Create = "/post",
  Update = "/post",
  Delete = "/post",
  CreateComment = "/post/comment",
  DeleteComment = "/post/comment",
  LikePost = "/post/like/post",
  UnlikePost = "/post/unlike/post",
  LikeComment = "/post/like/comment",
  UnlikeComment = "/post/unlike/comment",
  IncreaseView = "/post/view",
  CreateReply = "/post/reply",
  DeleteReply = "/post/reply",
  LikeReply = "/post/like/reply",
  UnlikeReply = "/post/unlike/reply",
  SearchPostsAll = "/post/search",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getAllPosts(): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.GetAllPosts}`);
  }

  async getPostById(id: string): Promise<PostByIdDto> {
    return await this._api.get(`${PostApiUrl.GetPostById}/${id}`);
  }

  async getPostsByCategory(category: string): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.GetPostsByCategory}/${category}`);
  }

  async create(payload: CreatePostPayload): Promise<PostIdDto> {
    return await this._api.post(`${PostApiUrl.Create}`, payload);
  }

  async update(payload: UpdatePostPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.Update}`, payload);
  }

  async delete(id: string): Promise<null> {
    return await this._api.delete(`${PostApiUrl.Delete}/${id}`);
  }

  async createComment(payload: CreateCommentPayload): Promise<PostIdDto> {
    return await this._api.post(`${PostApiUrl.CreateComment}`, payload);
  }

  async deleteComment(payload: DeleteCommentPayload): Promise<PostIdDto> {
    return await this._api.delete(`${PostApiUrl.DeleteComment}`, {
      params: payload,
    });
  }

  async likePost(payload: LikePostPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.LikePost}`, payload);
  }

  async unlikePost(payload: UnlikePostPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.UnlikePost}`, payload);
  }

  async likeComment(payload: LikeCommentPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.LikeComment}`, payload);
  }

  async unlikeComment(payload: UnlikeCommentPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.UnlikeComment}`, payload);
  }

  async increaseView(payload: IncreaseViewPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.IncreaseView}`, payload);
  }

  async createReply(payload: CreateReplyPayload): Promise<PostIdDto> {
    return await this._api.post(`${PostApiUrl.CreateReply}`, payload);
  }

  async deleteReply(payload: DeleteReplyPayload): Promise<PostIdDto> {
    return await this._api.delete(`${PostApiUrl.DeleteReply}`, {
      params: payload,
    });
  }

  async likeReply(payload: LikeReplyPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.LikeReply}`, payload);
  }

  async unlikeReply(payload: UnlikeReplyPayload): Promise<PostIdDto> {
    return await this._api.patch(`${PostApiUrl.UnlikeReply}`, payload);
  }

  async getSearchPostsAll(
    payload: SearchPostPayload
  ): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.SearchPostsAll}`, {
      params: payload,
    });
  }
}

export const postApi = new PostApi(baseApi);
