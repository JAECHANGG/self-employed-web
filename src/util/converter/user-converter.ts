import { GetSearchKeywordDto } from "@/types/user/dto";

export const convertUserByKeywordToSortUpdatedAt = (
  keywords: GetSearchKeywordDto[]
) => {
  return keywords.sort(
    (a: GetSearchKeywordDto, b: GetSearchKeywordDto) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
};
