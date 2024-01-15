import connect from "@/app/lib/(connection)/connection";
import m_categories from "@/app/lib/(models)/m_categories";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  try {
    await connect();
    const data = await m_categories.findOne({ _id: id });
    revalidatePath(`/api/categories/getname/${id}`);
    return new NextResponse(JSON.stringify(data?.catName || null), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching Sub Categories " + error, {
      status: 500,
    });
  }
};
