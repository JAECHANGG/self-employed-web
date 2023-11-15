import { meApi } from "@/api/me/me-api";
import { queryClient } from "@/app/provider";
import { UpdateMePayload } from "@/types/me/payload";
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
    mutationFn: (payload: UpdateMePayload) => meApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([MeQueryKey.GetMe]);
    },
  });
};
