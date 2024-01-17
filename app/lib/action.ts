"use server";

import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import {
  categorySchema,
  subcategory2Schema,
  subcategorySchema,
} from "./schemas";
import { CategoryData, SubCategory2Data, SubCategoryData } from "./interface";
import m_subCategories from "./(models)/m_subCategories";
import m_subCategories2 from "./(models)/m_subCategories2";

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
  const { catId } = formData;
  try {
    await connect();
    await subcategorySchema.validate(formData, { abortEarly: false });
    await m_subCategories.create(formData);

    revalidatePath("/dashboard/tools/categories");
    revalidatePath(`/dashboard/tools/categories/${catId}/subcategories`);
  } catch (error) {
    console.error("Error updating sub category:", error);
    return NextResponse.json(
      { message: "Error updating sub category: ", error },
      { status: 400 }
    );
  }
  redirect(`/dashboard/tools/categories/${catId}/subcategories`);
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

export async function deleteSubCategory(id: string, catId: string) {
  try {
    await connect();
    await m_subCategories.findByIdAndDelete(id);
    revalidatePath(`/dashboard/tools/categories/${catId}/subcategories`);
  } catch (error) {
    console.log("Error deleting category", error);
    return NextResponse.json(
      { message: "Error deleting category", error },
      { status: 400 }
    );
  }
}

export async function deleteSubCategory2(id: string) {
  try {
    await connect();
    await m_subCategories2.findByIdAndDelete(id);
    revalidateTag("r_subcategories");
    revalidateTag("r_subcategories2");
  } catch (error) {
    console.log("Error deleting category", error);
    return NextResponse.json(
      { message: "Error deleting category", error },
      { status: 400 }
    );
  }
}

export async function createSub2(formData: SubCategory2Data) {
  try {
    await connect();
    await subcategory2Schema.validate(formData, { abortEarly: false });
    await m_subCategories2.create(formData);
    revalidateTag("r_subcategories");
    revalidateTag("r_subcategories2");
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting category", error },
      { status: 400 }
    );
  }
  redirect(
    `/dashboard/tools/subcategories/${formData.subcatId}/subcategories2/`
  );
}
