"use server";

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
  } catch (error) {
    throw error;
  }

  revalidatePath("/dashboard/tools/categories");
  redirect("/dashboard/tools/categories");
}
