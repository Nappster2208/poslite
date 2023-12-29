import { unstable_noStore as noStore } from "next/cache";
import m_categories from "./(models)/m_categories";
import connect from "./(connection)/connection";

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
      .sort({ date: -1 })
      .skip(offset)
      .limit(ITEMS_PER_PAGE);
    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered categories.");
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
