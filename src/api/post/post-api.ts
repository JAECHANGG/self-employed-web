import { PostByCategoryDto } from "@/types/post/dto";
import { CreatePostPayload } from "@/types/post/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPost = "/post",
  Create = "/post",
  Delete = "/post",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getPostsByCategory(category: string): Promise<PostByCategoryDto[]> {
    return await this._api.get(`${PostApiUrl.GetPost}/${category}`);
  }

  async create(payload: CreatePostPayload): Promise<string> {
    return await this._api.post(`${PostApiUrl.Create}`, payload);
  }

  async deletePostsAll(): Promise<null> {
    return await this._api.delete(`${PostApiUrl.Delete}`);
  }
}

export const postApi = new PostApi(baseApi);
