import { meApi } from "@/api/me/me-api";
import { queryClient } from "@/app/provider";
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
    onSuccess: (response) => {
      queryClient.invalidateQueries([MeQueryKey.GetMe]);
      console.log("success", response);
    },
  });
};
