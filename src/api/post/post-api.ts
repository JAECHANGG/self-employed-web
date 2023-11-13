import { PostByCategoryDto } from "@/types/post/dto";
import { CreatePostPayload } from "@/types/post/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPostById = "/post",
  GetPostsByCategory = "/post/category",
  Create = "/post",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getPostById(id: string): Promise<PostByCategoryDto> {
    return await this._api.get(`${PostApiUrl.GetPostById}/${id}`);
  }

  async getPostsByCategory(category: string): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.GetPostsByCategory}/${category}`);
  }

  async create(payload: CreatePostPayload): Promise<string> {
    return await this._api.post(`${PostApiUrl.Create}`, payload);
  }
}

export const postApi = new PostApi(baseApi);
