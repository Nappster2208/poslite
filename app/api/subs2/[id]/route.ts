import connect from "@/app/lib/(connection)/connection";
import m_subCategories2 from "@/app/lib/(models)/m_subCategories2";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  const id = new Types.ObjectId(
    request.url.slice(request.url.lastIndexOf("/") + 1)
  );
  try {
    await connect();
    const data = await m_subCategories2.findOne({ _id: id });
    // const data = await m_subCategories2.aggregate([
    //   {
    //     $match: { _id: id },
    //   },
    //   {
    //     $lookup: {
    //       from: "r_subcategories",
    //       localField: "subcatId",
    //       foreignField: "_id",
    //       as: "subs",
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 1,
    //       subcatId: 1,
    //       subcatName: 1,
    //       subcatDesc: 1,
    //       subs: {
    //         $map: {
    //           input: "$subs",
    //           as: "sub",
    //           in: {
    //             catId: "$$sub.catId",
    //           },
    //         },
    //       },
    //     },
    //   },
    // ]);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching Sub Categories " + error, {
      status: 500,
    });
  }
};
