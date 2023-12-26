import { NextResponse } from "next/server";
import connect from "@/app/lib/(connection)/connection";
import m_categories from "@/app/lib/(models)/m_categories";

export const GET = async ({ request }) => {
  try {
    await connect();
    const categories = await m_categories.find();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching Categories " + error, {
      status: 500,
    });
  }
};
