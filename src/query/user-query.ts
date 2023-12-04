import { userApi } from "@/api/user/user-api";
import { queryClient } from "@/app/provider";
import {
  AddCollectionPayload,
  DeleteCollectionPayload,
} from "@/types/user/dto";
import { UpdateUserPayload } from "@/types/user/payload";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum UserQueryKey {
  GetUser = "getUser",
  UpdateUser = "updateUser",
  AddCollection = "addCollection",
  DeleteCollection = "deleteCollection",
}

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: [UserQueryKey.GetUser],
    queryFn: () => userApi.get(),
  });
};

export const useUpdateUserMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.UpdateUser],
    mutationFn: (payload: UpdateUserPayload) => userApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
    },
  });
};

export const useAddCollectionMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.AddCollection],
    mutationFn: (payload: AddCollectionPayload) =>
      userApi.addCollection(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
    },
  });
};

export const useDeleteCollectionMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.DeleteCollection],
    mutationFn: (payload: DeleteCollectionPayload) =>
      userApi.deleteCollection(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
    },
  });
};
