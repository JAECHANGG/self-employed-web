import { NextResponse } from "next/server";

export const getBaseResponse = (data: any) => {
  return NextResponse.json(data);
};

export const getErrorResponse = (error: any, status = 500) => {
  return new Response(JSON.stringify({ error: error.message }), {
    status,
  });
};
