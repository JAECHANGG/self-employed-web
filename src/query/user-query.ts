import { userApi } from "@/api/user/user-api";
import { queryClient } from "@/app/provider";
import { UserDto } from "@/types/user/dto";
import {
  DeleteSearchKeywordPayload,
  DeleteSearchKeywordsAllPayload,
  GetSearchKeywordsPayload,
  UpdateUserPayload,
} from "@/types/user/payload";
import { AddCollection, DeleteCollection } from "@/types/user/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum UserQueryKey {
  GetUser = "getUser",
  UpdateUser = "updateUser",
  AddCollection = "addCollection",
  DeleteCollection = "deleteCollection",
  GetSearchKeywords = "getSearchKeywords",
  DeleteSearchKeyword = "deleteSearchKeyword",
  DeleteSearchKeywordsAll = "deleteSearchKeywordsAll",
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
    mutationFn: ({ post, userId }: AddCollection) =>
      userApi.addCollection({ postId: post.id, userId: userId }),
    onMutate: async (newPayload: AddCollection) => {
      const { post } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [UserQueryKey.GetUser],
      });

      const previousPayload: UserDto | undefined = queryClient.getQueryData([
        UserQueryKey.GetUser,
      ]);

      if (previousPayload) {
        queryClient.setQueryData([UserQueryKey.GetUser], {
          ...previousPayload,
          collections: [...previousPayload.collections, post],
        });
      }

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [UserQueryKey.GetUser],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
      console.log("success", response);
    },
  });
};

export const useDeleteCollectionMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.DeleteCollection],
    mutationFn: ({ post, userId }: DeleteCollection) =>
      userApi.deleteCollection({
        postId: post.id,
        userId: userId,
      }),
    onMutate: async (newPayload: DeleteCollection) => {
      const { post } = newPayload;
      await queryClient.cancelQueries({
        queryKey: [UserQueryKey.GetUser],
      });

      const previousPayload: UserDto | undefined = queryClient.getQueryData([
        UserQueryKey.GetUser,
      ]);

      if (previousPayload) {
        queryClient.setQueryData([UserQueryKey.GetUser], {
          ...previousPayload,
          collections: previousPayload.collections.filter(
            (collection) => collection.id !== post.id
          ),
        });
      }

      return { previousPayload };
    },
    onError: (err, newPayload, context) => {
      queryClient.setQueryData(
        [UserQueryKey.GetUser],
        context?.previousPayload
      );
    },
    onSettled: (response) => {
      queryClient.invalidateQueries([UserQueryKey.GetUser]);
      console.log("success", response);
    },
  });
};

export const useGetSearchKeywordsQuery = (
  payload: GetSearchKeywordsPayload
) => {
  return useQuery({
    enabled: !!payload.userId,
    queryKey: [UserQueryKey.GetSearchKeywords],
    queryFn: () => userApi.getSearchKeywords(payload),
  });
};

export const useDeleteSearchKeywordMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.DeleteSearchKeyword],
    mutationFn: (payload: DeleteSearchKeywordPayload) =>
      userApi.deleteSearchKeyword(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetSearchKeywords]);
    },
  });
};

export const useDeleteSearchKeywordsAllMutation = () => {
  return useMutation({
    mutationKey: [UserQueryKey.DeleteSearchKeywordsAll],
    mutationFn: (payload: DeleteSearchKeywordsAllPayload) =>
      userApi.deleteSearchKeywordsAll(payload),
    onSuccess: () => {
      queryClient.invalidateQueries([UserQueryKey.GetSearchKeywords]);
    },
  });
};
