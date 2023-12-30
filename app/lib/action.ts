"use server";

import { NextResponse } from "next/server";
import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CategoryData {
  catName: string;
  catDesc: string;
}

export async function createCategory(formData: CategoryData) {
  try {
    await connect();
    await m_categories.create(formData);
    revalidatePath("/dashboard/tools/categories");
  } catch (error) {
    console.error("Error creating category:", error);
  }
  redirect("/dashboard/tools/categories");
}
