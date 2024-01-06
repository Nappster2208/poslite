import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  return new NextResponse(JSON.stringify(`hello`), { status: 200 });
};
