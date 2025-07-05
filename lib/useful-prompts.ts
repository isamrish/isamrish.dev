import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface UsefulPromptsMetadata {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface UsefulPromptsData extends UsefulPromptsMetadata {
  content: string;
}

export function getUsefulPromptsData(): UsefulPromptsData {
  const filePath = path.join(process.cwd(), 'src/content/useful-prompts.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    excerpt: data.excerpt,
    content,
  };
}