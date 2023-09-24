import { AxiosInstance } from "axios";
import { BEARER } from "../../types/bearer";
import { externalBaseApi } from "../external-base-api";

const KAKAO_CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`;
const KAKAO_REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}`;
const GRANT_TYPE = "authorization_code";
const ConTent_type = "application/x-www-form-urlencoded;charset=utf-8";

class KakaoSignInApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getToken(kakaoCode: string): Promise<any> {
    const KAKAO_CODE = kakaoCode;
    return await this._api.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
      {
        headers: {
          "Content-type": ConTent_type,
        },
      }
    );
  }

  async getUserInfo(accessToken: string): Promise<any> {
    return await this._api.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        // 여기에서 발급받은 토큰 사용
        Authorization: `${BEARER} ${accessToken}`,
        "Content-type": ConTent_type,
      },
    });
  }
}

export const kakaoSignInApi = new KakaoSignInApi(externalBaseApi);
