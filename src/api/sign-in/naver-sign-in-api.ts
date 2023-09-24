import { AxiosInstance } from "axios";
import { BEARER } from "../../types/bearer";
import { externalBaseApi } from "../external-base-api";

const NAVER_CLIENT_ID = `${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
const NAVER_SECRET_KEY = `${process.env.NEXT_PUBLIC_NAVER_SECRET_KEY}`;
const GRANT_TYPE = "authorization_code";

class NaverSignInApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getToken(naverCode: string, state: string): Promise<any> {
    const NAVER_CODE = naverCode;
    const STATE = state;
    return await this._api.post(
      `/navertoken/oauth2.0/token?grant_type=${GRANT_TYPE}&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_SECRET_KEY}&code=${NAVER_CODE}&state=${STATE}`
    );
  }

  async getUserInfo(accessToken: string): Promise<any> {
    return await this._api.get(`/naveruser/v1/nid/me`, {
      headers: {
        Authorization: `${BEARER} ${accessToken}`,
      },
    });
  }
}

export const naverSignInApi = new NaverSignInApi(externalBaseApi);
