import { addCollection, deleteCollection } from "@/service/user";
import {
  AddCollectionPayload,
  DeleteCollectionPayload,
} from "@/types/user/dto";
import { getBaseResponse, getErrorResponse } from "@/util/api-routes-util";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const addCollectionPayload: AddCollectionPayload = await request.json();

  return addCollection(addCollectionPayload)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const userId = searchParams.get("userId");

  const deleteCollectionPayload: DeleteCollectionPayload = {
    postId: postId || "",
    userId: userId || "",
  };

  return deleteCollection(deleteCollectionPayload)
    .then((data) => getBaseResponse(data))
    .catch((error) => getErrorResponse(error));
}
