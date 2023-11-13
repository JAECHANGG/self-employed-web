import { meApi } from "@/api/me/me-api";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum MeQueryKey {
  GetMe = "getMe",
  updateMe = "updateMe",
}

export const useGetMeQuery = () => {
  return useQuery({
    queryKey: [MeQueryKey.GetMe],
    queryFn: () => meApi.get(),
  });
};

export const useUpdateMeMutation = () => {
  return useMutation({
    mutationKey: [MeQueryKey.updateMe],
    mutationFn: (payload: any) => meApi.update(payload),
  });
};
