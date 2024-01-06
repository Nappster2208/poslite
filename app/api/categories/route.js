import { NextResponse } from "next/server";
import connect from "@/app/lib/(connection)/connection";
import m_categories from "@/app/lib/(models)/m_categories";

export const GET = async (request) => {
  try {
    await connect();
    const data = await m_categories.find();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching menus " + error, {
      status: 500,
    });
  }
};

export async function POST(req) {
  try {
    const body = await req.json();
    const id = body.id;
    console.log(query);

    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error ", error }, { status: 500 });
  }
}
