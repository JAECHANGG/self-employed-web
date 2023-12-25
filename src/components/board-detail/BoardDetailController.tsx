import { postApi } from "@/api/post/post-api";
import { getUser } from "@/app/boards/freeboard/[slug]/page";
import { PostQueryKey } from "@/query/post-query";
import { UserQueryKey } from "@/query/user-query";
import getQueryClient from "@/util/get-query-client";
import { dehydrate } from "@tanstack/query-core";
import { CustomHydrate } from "../CustomHydrate";
import { BoardDetailContainer } from "./BoardDetailContainer";

interface Props {
  id: string;
}

export const BoardDetailController = async ({ id }: Props) => {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery([PostQueryKey.GetPostsById, id], () =>
      postApi.getPostById(id)
    ),
    queryClient.prefetchQuery([UserQueryKey.GetUser], () => getUser()),
  ]);
  const dehydratedState = dehydrate(queryClient);

  return (
    <CustomHydrate state={dehydratedState}>
      <BoardDetailContainer id={id} />
    </CustomHydrate>
  );
};
