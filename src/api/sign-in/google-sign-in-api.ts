import { AxiosInstance } from "axios";
import { BEARER } from "../../types/bearer";
import { externalBaseApi } from "../external-base-api";

const GOOGLE_CLIENT_ID = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
const GOOGLE_SECRET_KEY = `${process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY}`;
const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}`;
const GRANT_TYPE = "authorization_code";
const ConTent_type = "application/x-www-form-urlencoded";

class GoogleSignInApi {
  private _api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this._api = api;
  }

  async getToken(googleCode: string): Promise<any> {
    const GOOGLE_CODE = googleCode;
    return await this._api.post(
      `https://oauth2.googleapis.com/token?grant_type=${GRANT_TYPE}&code=${GOOGLE_CODE}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_SECRET_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}`,
      {
        headers: {
          "Content-type": ConTent_type,
        },
      }
    );
  }

  async getUserInfo(accessToken: string): Promise<any> {
    return await this._api.get(
      `https://openidconnect.googleapis.com/v1/userinfo`,
      {
        headers: {
          Authorization: `${BEARER} ${accessToken}`,
        },
      }
    );
  }
}

export const googleSignInApi = new GoogleSignInApi(externalBaseApi);
