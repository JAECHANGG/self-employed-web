import { UpdateMePayload } from "@/types/me/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";
import { AuthorDto } from "@/types/author/dto";

enum MeApiUrl {
  Get = "/me",
  Update = "/me",
}

class MeApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async get(): Promise<AuthorDto> {
    return await this._api.get(`${MeApiUrl.Get}`);
  }

  async update(payload: UpdateMePayload): Promise<null> {
    return await this._api.patch(`${MeApiUrl.Update}`, payload);
  }
}

export const meApi = new MeApi(baseApi);
