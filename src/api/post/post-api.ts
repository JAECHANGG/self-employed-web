import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum PostApiUrl {
  GetPost = "/post",
}

class PostApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getAllPost(): Promise<any> {
    return await this._api.get(`${PostApiUrl.GetPost}`);
  }
}

export const postApi = new PostApi(baseApi);
