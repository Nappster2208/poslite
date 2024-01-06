import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  return new NextResponse(JSON.stringify(`hello ${id}`), { status: 200 });
};
