import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPost = "/post",
  Create = "/post",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getAllPost(): Promise<any> {
    return await this._api.get(`${PostApiUrl.GetPost}`);
  }

  // async create(payload: CreatePostPayload): Promise<string> {
  //   return await this._api.post(`${PostApiUrl.Create}`, payload);
  // }

  async create(payload: any): Promise<string> {
    return await this._api.post(`${PostApiUrl.Create}`, payload);
  }
}

export const postApi = new PostApi(baseApi);
