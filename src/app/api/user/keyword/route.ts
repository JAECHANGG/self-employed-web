import {
  deleteSearchKeyword,
  deleteSearchKeywordsAll,
  getSearchKeyword,
} from "@/service/user";
import {
  DeleteSearchKeywordPayload,
  DeleteSearchKeywordsAllPayload,
} from "@/types/user/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";

  return getSearchKeyword({
    userId,
  })
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const keywordId = searchParams.get("keywordId");

  const deleteSearchKeywordPayload: DeleteSearchKeywordPayload = {
    userId: userId || "",
    keywordId: keywordId || "",
  };

  return deleteSearchKeyword(deleteSearchKeywordPayload)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function PATCH(request: NextRequest) {
  const deleteSearchKeywordsAllPayload: DeleteSearchKeywordsAllPayload =
    await request.json();

  return deleteSearchKeywordsAll(deleteSearchKeywordsAllPayload)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
