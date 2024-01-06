import { unstable_noStore as noStore } from "next/cache";
import m_categories from "./(models)/m_categories";
import connect from "./(connection)/connection";
import { NextResponse } from "next/server";

const ITEMS_PER_PAGE = 6;

export async function FetchFilteredCategories(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connect();
    const categories = await m_categories
      .find({
        $or: [
          { catName: { $regex: new RegExp(query, "i") } },
          { catDesc: { $regex: new RegExp(query, "i") } },
        ],
      })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(ITEMS_PER_PAGE);
    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered categories.");
  }
}

export async function FetchCategoryWithId(id: string) {
  noStore();
  try {
    const category = await m_categories.find({ _id: id });
    return category;
  } catch (error) {
    throw new Error("Failed to fetch category.");
  }
}

//Count Total Page of Categories
export async function FetchCategoryPage(query: string) {
  noStore();
  try {
    await connect();
    const count = await m_categories.countDocuments({});
    const totalPage = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPage;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of categories.");
  }
}

//Count Total Page of Sub Categories
export async function FetchSubCategoryPage(query: string, id: string) {
  noStore();
  try {
    await connect();
    const data = await m_categories.find({ _id: id });
    let totalPage = 1;
    data.map((item) => {
      totalPage = Math.ceil(item.subCategory.length / ITEMS_PER_PAGE);
    });
    return totalPage;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of categories.");
  }
}

export async function FetchFilteredSubCategories(id: string) {
  noStore();

  try {
    await connect();
    const data = await m_categories.findOne(
      { _id: id },
      { projection: { "subCategory._id": 0 } }
    );
    return data?.subCategory || [];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered categories.");
  }
}
