import {
  createSearchKeyword,
  deleteSearchKeyword,
  deleteSearchKeywordAll,
  getSearchKeyword,
} from "@/service/user";
import {
  CreateSearchKeywordPayload,
  DeleteSearchKeywordPayload,
  DeleteSearchKeywordAllPayload,
} from "@/types/user/payload";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";

  return getSearchKeyword({
    userId,
  })
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function POST(request: NextRequest) {
  const createSearchKeywordPayload: CreateSearchKeywordPayload =
    await request.json();

  return createSearchKeyword(createSearchKeywordPayload)
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
  const deleteSearchKeywordAllPayload: DeleteSearchKeywordAllPayload =
    await request.json();

  return deleteSearchKeywordAll(deleteSearchKeywordAllPayload)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
