import m_menu from "@/app/lib/(models)/m_menu";
import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath("/api/hello");
  return Response.json({
    date: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
  });
}
