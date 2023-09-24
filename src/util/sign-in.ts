import { userApi } from "../api/users/user-api";
import { Profile } from "../types/profile/profile";

export const signIn = async (params: Profile) => {
  const response = await userApi.createUser(params);
  console.log(response);
  // await fetchUser(params);
  const profile = await userApi.getUserInfo(params.id);
  console.log(profile);
  // setLocalStorageUserId(profile.id);
  return profile;
};
