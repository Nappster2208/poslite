"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  catName: z.string({
    invalid_type_error: "Please enter category name",
  }),
  catDesc: z.string(),
  date: z.string(),
});

export type State = {
  errors?: {
    catName?: string[];
    catDesc?: string[];
  };
  message?: string | null;
};

const CreateCategory = FormSchema.omit({ id: true, date: true });

export async function createCategory(formData: FormData) {
  const { catName, catDesc } = CreateCategory.parse({
    catName: formData.get("catName"),
    catDesc: formData.get("catDesc"),
  });

  const date = new Date().toISOString().split("T")[0];
}
