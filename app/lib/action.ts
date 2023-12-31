"use server";

import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import * as yup from "yup";

const categorySchema = yup.object().shape({
  catName: yup.string().min(3).max(20).required(),
  catDesc: yup.string().min(3).max(100).required(),
});

interface CategoryData {
  catName: string;
  catDesc: string;
}

export async function createCategory(formData: CategoryData) {
  try {
    await connect();
    await categorySchema.validate(formData, { abortEarly: false });
    await m_categories.create(formData);
    revalidatePath("/dashboard/tools/categories");
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { message: "Error creating category: ", error },
      { status: 400 }
    );
  }
  redirect("/dashboard/tools/categories");
}

export async function updateCategory(id: string, formData: CategoryData) {
  try {
    const { catName, catDesc } = formData;
    await connect();
    await categorySchema.validate(formData, { abortEarly: false });
    await m_categories.findByIdAndUpdate(id, { catName, catDesc });
    revalidatePath("/dashboard/tools/categories");
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { message: "Error updating category: ", error },
      { status: 400 }
    );
  }
  redirect("/dashboard/tools/categories");
}

export async function deleteCategory(id: string) {
  try {
    await connect();
    await m_categories.findByIdAndDelete(id);
    revalidatePath("/dashboard/tools/categories");
  } catch (error) {
    console.log("Error deleting category", error);
    return NextResponse.json(
      { message: "Error deleting category", error },
      { status: 400 }
    );
  }
}
