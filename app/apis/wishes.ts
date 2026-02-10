import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Invalid data" });
  }

  // xử lý tiếp...
  res.status(200).json({ success: true });
}
