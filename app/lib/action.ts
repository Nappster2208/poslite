"use server";

import connect from "./(connection)/connection";
import m_categories from "./(models)/m_categories";

export async function createCategory(formData: FormData) {
  const data = {
    catName: formData.get("catName"),
    catDesc: formData.get("catDesc"),
  };
  console.log(data);
  try {
    await connect();
    await m_categories.create(data);
  } catch (error) {}
}
