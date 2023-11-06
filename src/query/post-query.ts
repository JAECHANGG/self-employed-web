import { postApi } from "@/api/post/post-api";
import { useMutation, useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetAllPost = "getAllPost",
  Create = "CreatePost",
}

export const useGetAllPostQuery = () => {
  return useQuery({
    queryKey: [PostQueryKey.GetAllPost],
    queryFn: () => postApi.getAllPost(),
  });
};

export const useCreatePostMutation = () => {
  return useMutation({
    mutationKey: [PostQueryKey.Create],
    mutationFn: (payload: FormData) => postApi.create(payload),
    onSuccess: (response) => {
      console.log("success", response);
    },
  });
};
