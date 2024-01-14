import { NextResponse } from "next/server";
import connect from "@/app/lib/(connection)/connection";
import m_menu from "@/app/lib/(models)/m_menu";
import { revalidatePath } from "next/cache";

export const GET = async () => {
  try {
    await connect();
    const menus = await m_menu.find();
    revalidatePath("/api/menus");
    return new NextResponse(JSON.stringify(menus), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching menus " + error, {
      status: 500,
    });
  }
};
