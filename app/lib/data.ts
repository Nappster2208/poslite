import { unstable_noStore as noStore } from "next/cache";
import m_categories from "./(models)/m_categories";
import connect from "./(connection)/connection";
import m_subCategories from "./(models)/m_subCategories";
import { Types } from "mongoose";
import m_subCategories2 from "./(models)/m_subCategories2";

const ITEMS_PER_PAGE = 6;

export async function FetchFilteredCategories(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connect();
    const categories = await m_categories.aggregate([
      {
        $match: {
          $or: [
            { catName: { $regex: new RegExp(query, "i") } },
            { catDesc: { $regex: new RegExp(query, "i") } },
          ],
        },
      },
      {
        $lookup: {
          from: "r_subcategories",
          localField: "_id",
          foreignField: "catId",
          as: "subCategories",
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $skip: offset,
      },
      {
        $limit: ITEMS_PER_PAGE,
      },
    ]);
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

export async function FetchSubCategoryPage(query: string, id: string) {
  noStore();
  try {
    await connect();
    const count = await m_subCategories.find({ catId: id }).countDocuments();
    const totalPage = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPage;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of categories.");
  }
}

export async function FetchFilteredSubCategories(
  id: string,
  query: string,
  currentPage: number
) {
  const catId = new Types.ObjectId(id);
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connect();

    const subs = await m_subCategories.aggregate([
      {
        $match: {
          catId: catId,
          $or: [
            { subcatName: { $regex: new RegExp(query, "i") } },
            { subcatDesc: { $regex: new RegExp(query, "i") } },
          ],
        },
      },
      {
        $lookup: {
          from: "r_subcategories2",
          localField: "_id",
          foreignField: "subcatId",
          as: "subCategories2",
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $skip: offset,
      },
      {
        $limit: ITEMS_PER_PAGE,
      },
    ]);
    return subs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered categories.");
  }
}

export async function FetchSubCategoryWithId(id: string) {
  try {
    await connect();
    const result = await m_subCategories.findById({ _id: id });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch filtered categories.");
  }
}

export async function FetchFilteredSubCategories2(
  id: string,
  query: string,
  currentPage: number
) {
  const subcatId = new Types.ObjectId(id);
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await connect();

    const subs = await m_subCategories2
      .aggregate([
        {
          $match: {
            subcatId: subcatId,
            $or: [
              { subcatName: { $regex: new RegExp(query, "i") } },
              { subcatDesc: { $regex: new RegExp(query, "i") } },
            ],
          },
        },
      ])
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(ITEMS_PER_PAGE);
    return subs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered categories.");
  }
}

export async function FetchSubCategory2Page(query: string, id: string) {
  noStore();
  try {
    await connect();
    const count = await m_subCategories2
      .find({ subcatId: id })
      .countDocuments();
    const totalPage = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPage;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of categories.");
  }
}
