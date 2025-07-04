import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "src/content/useful-prompts.mdx");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  res.status(200).json({ mdxSource, data });
}