import { meApi } from "@/api/me/me-api";
import { useQuery } from "@tanstack/react-query";

export enum MeQueryKey {
  GetMe = "getMe",
}

export const useGetMeQuery = () => {
  return useQuery({
    queryKey: [MeQueryKey.GetMe],
    queryFn: () => meApi.getMe(),
  });
};
