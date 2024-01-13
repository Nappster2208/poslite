"use server";

import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { categorySchema, subcategorySchema } from "./schemas";
import { CategoryData, SubCategoryData } from "./interface";
import m_subCategories from "./(models)/m_subCategories";

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

export async function AddSubCategory(formData: SubCategoryData) {
  try {
    await connect();
    await subcategorySchema.validate(formData, { abortEarly: false });
    await m_subCategories.create(formData);

    revalidatePath("/dashboard/tools/categories");
  } catch (error) {
    console.error("Error updating sub category:", error);
    return NextResponse.json(
      { message: "Error updating sub category: ", error },
      { status: 400 }
    );
  }
  redirect("/dashboard/tools/categories");
}

export async function updateSubCategory(id: string, formData: SubCategoryData) {
  const { catId, subcatName, subcatDesc } = formData;
  try {
    await connect();
    await subcategorySchema.validate(formData, { abortEarly: false });
    await m_subCategories.findByIdAndUpdate(id, { subcatName, subcatDesc });
    revalidatePath(`/dashboard/tools/categories/${catId}/subcategories`);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { message: "Error updating category: ", error },
      { status: 400 }
    );
  }
  redirect(`/dashboard/tools/categories/${catId}/subcategories`);
}
