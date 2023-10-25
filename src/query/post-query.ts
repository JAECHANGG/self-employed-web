import { postApi } from "@/api/post/post-api";
import { useQuery } from "@tanstack/react-query";

export enum PostQueryKey {
  GetAllPost = "getAllPost",
}

export const useGetAllPostQuery = () => {
  return useQuery({
    queryKey: [PostQueryKey.GetAllPost],
    queryFn: () => postApi.getAllPost(),
  });
};
