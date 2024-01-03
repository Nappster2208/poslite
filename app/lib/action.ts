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

interface SubCategoryData {
  subcatName: string;
  subcatDesc: string;
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

export async function AddSubCategory(id: string, formData: SubCategoryData) {
  const { subcatName, subcatDesc } = formData;

  try {
    await connect();
    const category = await m_categories.findById(id);

    if (category.subCategory && category.subCategory.length > 0) {
      await m_categories.updateOne(
        { _id: id },
        {
          $push: {
            subCategory: {
              subcatName: subcatName,
              subcatDesc: subcatDesc,
            },
          },
        }
      );
    } else {
      await m_categories.updateOne(
        { _id: id },
        {
          $set: {
            subCategory: {
              subcatName: subcatName,
              subcatDesc: subcatDesc,
            },
          },
        }
      );
    }

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
