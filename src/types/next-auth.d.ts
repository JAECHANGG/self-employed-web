import { OAuthUser } from "./user/oauth-user";

declare module "next-auth" {
  interface Session {
    user: OAuthUser;
  }
}
