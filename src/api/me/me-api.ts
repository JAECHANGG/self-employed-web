import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum MeApiUrl {
  GetMe = "/me",
}

class MeApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getMe(): Promise<any> {
    return await this._api.get(`${MeApiUrl.GetMe}`);
  }

  async updateMe(): Promise<any> {
    return await this._api.put(`${MeApiUrl.GetMe}`);
  }
}

export const meApi = new MeApi(baseApi);
