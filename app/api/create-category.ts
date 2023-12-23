import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../lib/(connection)/connection";
import Category from "../lib/(models)/m_categories";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  await connectDB();
}
