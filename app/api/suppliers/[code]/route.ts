import connect from "@/app/lib/(connection)/connection";
import m_supplier from "@/app/lib/(models)/m_supplier";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  const code = request.url.slice(request.url.lastIndexOf("/") + 1);
  try {
    await connect();
    const data = await m_supplier.find({ code: code }).countDocuments();
    revalidateTag("suppliers");
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching supplier " + error, {
      status: 500,
    });
  }
};
