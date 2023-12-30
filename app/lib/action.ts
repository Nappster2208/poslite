"use server";

import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";
import { z } from "zod";

// Define Zod schema for formData
const categorySchema = z.object({
  catName: z.string().min(1).max(10), // Adjust the min and max values as needed
  catDesc: z.string().min(1).max(100), // Adjust the min and max values as needed
});

export async function createCategory(formData: FormData) {
  const data = categorySchema.parse({
    catName: formData.get("catName"),
    catDesc: formData.get("catDesc"),
  });

  console.log(data);

  try {
    await connect();
    await m_categories.create(data);
  } catch (error) {}
}
