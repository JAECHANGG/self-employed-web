import { UserDto } from "@/types/user/dto";
import { UpdateUserPayload } from "@/types/user/payload";
import { AxiosInstance } from "axios";
import { baseApi } from "../base-api";

enum UserApiUrl {
  Get = "/user",
  Update = "/user",
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
}

export const userApi = new UserApi(baseApi);
