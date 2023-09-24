import { Id } from "@/types/id";
import { Profile, UpdateProfile } from "@/types/profile/profile";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum UserApiUrl {
  Create = "/user",
  Update = "/user",
  Delete = "/user",
  GetById = "/user",
}

class UserApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async createUser(params: Profile): Promise<any> {
    return await this._api.post(UserApiUrl.Create, params);
  }

  async updateUser(params: UpdateProfile): Promise<Id> {
    return await this._api.post(UserApiUrl.Update, params);
  }

  async deleteUser(id: string): Promise<Id> {
    return await this._api.delete(`${UserApiUrl.Delete}/${id}`);
  }

  async getUserInfo(id: string): Promise<Profile | undefined> {
    return await this._api.get(`${UserApiUrl.GetById}/${id}`);
  }
}

export const userApi = new UserApi(baseApi);
