import { userApi } from "@/api/user/user-api";
import { queryClient } from "@/app/provider";
import { UpdateUserPayload } from "@/types/user/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum UserQueryKey {
  GetUser = "getUser",
  updateUser = "updateUser",
}

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: [UserQueryKey.GetUser],
    queryFn: () => userApi.get(),
  });
};

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.updateUser],
    mutationFn: (payload: UpdateUserPayload) => userApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
    },
  });
};
