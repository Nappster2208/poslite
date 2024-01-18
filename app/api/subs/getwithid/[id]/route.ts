import connect from "@/app/lib/(connection)/connection";
import m_subCategories from "@/app/lib/(models)/m_subCategories";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  try {
    await connect();
    const data = await m_subCategories.findOne({ _id: id });
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching Sub Categories " + error, {
      status: 500,
    });
  }
};
