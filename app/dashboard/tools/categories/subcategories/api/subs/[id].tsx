import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  try {
    // Your logic to handle the id and respond with data
    const data = { id, message: `Data for id ${id}` };

    res.status(200).json(data);
  } catch (error) {
    console.error("Error handling data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
