import { updateMe } from "@/service/me";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum MeApiUrl {
  GetMe = "/me",
  UpdateMe = "/me",
}

class MeApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getMe(): Promise<any> {
    return await this._api.get(`${MeApiUrl.GetMe}`);
  }

  async updateMe(payload: any): Promise<any> {
    return await this._api.put(`${MeApiUrl.UpdateMe}`, payload);
  }
}

export const meApi = new MeApi(baseApi);
