import { GetSearchKeywordDto, UserDto } from "@/types/user/dto";
import {
  AddCollectionPayload,
  DeleteSearchKeywordPayload,
  DeleteSearchKeywordsAllPayload,
  GetSearchKeywordsPayload,
  UpdateUserPayload,
} from "@/types/user/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum UserApiUrl {
  Get = "/user",
  Update = "/user",
  AddCollection = "/user/collection",
  DeleteCollection = "/user/collection",
  GetSearchKeyword = "/user/keyword",
  DeleteSearchKeyword = "/user/keyword",
  DeleteSearchKeywordsAll = "/user/keyword",
}

class UserApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async get(): Promise<UserDto> {
    return await this._api.get(`${UserApiUrl.Get}`);
  }

  async update(payload: UpdateUserPayload): Promise<null> {
    return await this._api.patch(`${UserApiUrl.Update}`, payload);
  }

  async addCollection(payload: AddCollectionPayload): Promise<null> {
    return await this._api.post(`${UserApiUrl.AddCollection}`, payload);
  }

  async deleteCollection(payload: AddCollectionPayload): Promise<null> {
    return await this._api.delete(`${UserApiUrl.DeleteCollection}`, {
      params: payload,
    });
  }

  async getSearchKeywords(
    payload: GetSearchKeywordsPayload
  ): Promise<GetSearchKeywordDto[]> {
    return await this._api.get(`${UserApiUrl.GetSearchKeyword}`, {
      params: payload,
    });
  }

  async deleteSearchKeyword(
    payload: DeleteSearchKeywordPayload
  ): Promise<null> {
    return await this._api.delete(`${UserApiUrl.DeleteSearchKeyword}`, {
      params: payload,
    });
  }

  async deleteSearchKeywordsAll(
    payload: DeleteSearchKeywordsAllPayload
  ): Promise<null> {
    return await this._api.patch(
      `${UserApiUrl.DeleteSearchKeywordsAll}`,
      payload
    );
  }
}

export const userApi = new UserApi(baseApi);
