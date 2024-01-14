import connect from "@/app/lib/(connection)/connection";
import m_menu from "@/app/lib/(models)/m_menu";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  await connect();
  const menus = await m_menu.find();

  // const path = req.query.path as string;

  await res.revalidate("/api/menus");
  // await res.revalidate(path);

  return res.json(menus);
  // return res.json({ revalidated: true });
}
