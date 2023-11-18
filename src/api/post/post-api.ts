import { PostByCategoryDto, PostByIdDto } from "@/types/post/dto";
import {
  CreateCommentPayload,
  CreatePostPayload,
  DeleteCommentPayload,
  IncreaseViewPayload,
  LikeCommentPayload,
  LikePostPayload,
  UnlikeCommentPayload,
  UnlikePostPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPostById = "/post",
  GetPostsByCategory = "/post/category",
  Create = "/post",
  Update = "/post",
  Delete = "/post",
  CreateComment = "/post/comment/write",
  DeleteComment = "/post/comment/remove",
  LikePost = "/post/like/post",
  UnlikePost = "/post/unlike/post",
  LikeComment = "/post/like/comment",
  UnlikeComment = "/post/unlike/comment",
  IncreaseView = "/post/view",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getPostById(id: string): Promise<PostByIdDto> {
    return await this._api.get(`${PostApiUrl.GetPostById}/${id}`);
  }

  async getPostsByCategory(category: string): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.GetPostsByCategory}/${category}`);
  }

  async create(payload: CreatePostPayload): Promise<string> {
    return await this._api.post(`${PostApiUrl.Create}`, payload);
  }

  async update(payload: UpdatePostPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.Update}`, payload);
  }

  async delete(id: string) {
    return await this._api.delete(`${PostApiUrl.Delete}/${id}`);
  }

  async createComment(payload: CreateCommentPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.CreateComment}`, payload);
  }

  async deleteComment(payload: DeleteCommentPayload) {
    return await this._api.patch(`${PostApiUrl.DeleteComment}`, payload);
  }

  async likePost(payload: LikePostPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.LikePost}`, payload);
  }

  async unlikePost(payload: UnlikePostPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.UnlikePost}`, payload);
  }

  async likeComment(payload: LikeCommentPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.LikeComment}`, payload);
  }

  async unlikeComment(payload: UnlikeCommentPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.UnlikeComment}`, payload);
  }

  async increaseView(payload: IncreaseViewPayload): Promise<null> {
    return await this._api.patch(`${PostApiUrl.IncreaseView}`, payload);
  }
}

export const postApi = new PostApi(baseApi);
