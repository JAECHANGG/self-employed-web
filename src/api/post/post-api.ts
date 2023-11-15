import { PostByCategoryDto, PostByIdDto } from "@/types/post/dto";
import {
  CreateCommentPayload,
  CreatePostPayload,
  UpdatePostPayload,
} from "@/types/post/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPostById = "/post",
  GetPostsByCategory = "/post/category",
  Create = "/post",
  Update = "/post",
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

  async createComment(payload: CreateCommentPayload): Promise<string> {
    return await this._api.patch(`${PostApiUrl.Update}/${payload.id}`, payload);
  }
}

export const postApi = new PostApi(baseApi);
