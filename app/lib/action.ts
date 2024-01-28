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
  supplierSchema,
  supplierSchemaType,
} from "./schemas";
import { CategoryData, SubCategory2Data, SubCategoryData } from "./interface";
import m_subCategories from "./(models)/m_subCategories";
import m_subCategories2 from "./(models)/m_subCategories2";
import path from "path";
import fs from "fs/promises";
import m_supplier from "./(models)/m_supplier";
import { getDate, getDateTime } from "./utils";

export async function createCategory(formData: CategoryData) {
  try {
    await connect();
    const myData = {
      ...formData,
      tanggal: getDate(),
      createdAt: getDateTime(),
      updatedAt: getDateTime(),
      deletedAt: "",
    };
    await categorySchema.validate(myData, { abortEarly: false });
    await m_categories.create(myData);
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
  const { catName, catDesc } = formData;
  const updatedAt = getDateTime();
  try {
    await connect();
    await categorySchema.validate(formData, { abortEarly: false });
    await m_categories.findByIdAndUpdate(id, { catName, catDesc, updatedAt });
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
  const deletedAt = getDateTime();
  try {
    await connect();
    await m_categories.findByIdAndUpdate(id, { deletedAt });
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
    const myData = {
      ...formData,
      tanggal: getDate(),
      createdAt: getDateTime(),
      updatedAt: getDateTime(),
      deletedAt: "",
    };
    await subcategorySchema.validate(myData, { abortEarly: false });
    await m_subCategories.create(myData);

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
  const updatedAt = getDateTime();
  try {
    await connect();
    await subcategorySchema.validate(formData, { abortEarly: false });
    await m_subCategories.findByIdAndUpdate(id, {
      subcatName,
      subcatDesc,
      updatedAt,
    });
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
  const deletedAt = getDateTime();
  try {
    await connect();
    await m_subCategories.findByIdAndUpdate(id, { deletedAt });
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
  const deletedAt = getDateTime();
  try {
    await connect();
    await m_subCategories2.findByIdAndUpdate(id, { deletedAt });
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
    const myData = {
      ...formData,
      tanggal: getDate(),
      createdAt: getDateTime(),
      updatedAt: getDateTime(),
      deletedAt: "",
    };
    await subcategory2Schema.validate(myData, { abortEarly: false });
    await m_subCategories2.create(myData);
    revalidateTag("r_subcategories");
    revalidateTag("r_subcategories2");
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating sub category 2", error },
      { status: 400 }
    );
  }
  redirect(
    `/dashboard/tools/subcategories/${formData.subcatId}/subcategories2/`
  );
}

export async function updateSubCategory2(
  id: string,
  formData: SubCategory2Data
) {
  const { subcatId, subcatName, subcatDesc } = formData;
  const updatedAt = getDateTime();
  try {
    await connect();
    await subcategory2Schema.validate(formData, { abortEarly: false });
    await m_subCategories2.findByIdAndUpdate(id, {
      subcatName,
      subcatDesc,
      updatedAt,
    });
    revalidatePath(`/dashboard/tools/subcategories/${subcatId}/subcategories2`);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating sub category", error },
      { status: 400 }
    );
  }
  redirect(`/dashboard/tools/subcategories/${subcatId}/subcategories2`);
}

export async function addSupplier(
  formData: FormData,
  schemaData: supplierSchemaType
) {
  const logo = formData.get("logo") as File;

  let uploadDir = "";
  let dir = "";
  let fileName = "";

  if (logo !== null) {
    try {
      dir = "/supplier/";
      uploadDir = path.join(process.cwd(), "/public" + dir);

      await fs.mkdir(uploadDir, { recursive: true });

      fileName = `${Date.now()}-${logo.name}`;

      const filePath = path.join(uploadDir, fileName);

      // Baca data dari file dan simpan ke sistem file
      const fileBuffer = await logo.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(fileBuffer));
    } catch (error) {
      console.error("Error saving file:", error);
      throw new Error("Failed to save file");
    }
  }

  try {
    await connect();
    const myData = {
      ...schemaData,
      logo: {
        fileName: fileName,
        filePath: dir,
      },
      tanggal: getDate(),
      createdAt: getDateTime(),
      updatedAt: getDateTime(),
      deletedAt: "",
    };
    await supplierSchema.validate(myData, { abortEarly: false });
    await m_supplier.create(myData);
    revalidatePath("/dashboard/master/supplier/");
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating supplier", error },
      { status: 400 }
    );
  }
  redirect("/dashboard/master/supplier/");
}

export async function updateSupplier(
  id: string,
  formData: FormData,
  schemaData: supplierSchemaType
) {
  const logo = formData.get("logo") as File;

  let uploadDir = "";
  let dir = "";
  let fileName = "";

  if (logo !== null) {
    try {
      dir = "/supplier/";
      uploadDir = path.join(process.cwd(), "/public" + dir);

      await fs.mkdir(uploadDir, { recursive: true });

      fileName = `${Date.now()}-${logo.name}`;

      const filePath = path.join(uploadDir, fileName);

      // Check if the file already exists
      const existingSupplier = await m_supplier.findById(id);
      if (existingSupplier && existingSupplier.logo) {
        const existingFilePath = path.join(
          process.cwd(),
          "/public" + existingSupplier.logo.filePath,
          existingSupplier.logo.fileName
        );

        // Delete the old file if it exists
        try {
          await fs.access(existingFilePath);
          await fs.unlink(existingFilePath);
        } catch (error) {
          // Handle error or ignore if the file doesn't exist
        }
      }

      const fileBuffer = await logo.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(fileBuffer));
    } catch (error) {
      console.error("Error saving file:", error);
      throw new Error("Failed to save file");
    }
  }

  try {
    await connect();
    const myData = {
      ...schemaData,
      logo: {
        fileName: fileName,
        filePath: dir,
      },
      updatedAt: getDateTime(),
    };
    await supplierSchema.validate(myData, { abortEarly: false });
    await m_supplier.findByIdAndUpdate(id, myData);
    revalidatePath("/dashboard/master/supplier/");
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating supplier", error },
      { status: 400 }
    );
  }
  redirect("/dashboard/master/supplier/");
}

export async function deleteSupplier(id: string) {
  const deletedAt = getDateTime();
  try {
    await connect();
    await m_supplier.findByIdAndUpdate(id, { deletedAt });
    revalidatePath("/dashboard/master/supplier");
  } catch (error) {
    console.log("Error deleting supplier", error);
    return NextResponse.json(
      { message: "Error deleting supplier", error },
      { status: 400 }
    );
  }
}
