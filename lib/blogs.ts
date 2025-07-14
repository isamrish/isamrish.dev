import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogMetadata {
  title: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  draft?: boolean; // Optional field to indicate if the blog is a draft
  filename: string; // Add filename to track the actual file
}

export function getBlogMetadata(slug: string): BlogMetadata {
  // First try to find by custom slug in frontmatter
  const blogsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs
    .readdirSync(blogsDirectory)
    .filter((name) => name.endsWith(".mdx"));

  let targetFile = null;
  let data: any = {};

  // Look for file with matching custom slug in frontmatter
  for (const filename of filenames) {
    const filePath = path.join(blogsDirectory, filename);
    const contents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(contents);

    if (frontmatter.slug === slug || filename.replace(/\.mdx$/, "") === slug) {
      targetFile = filename;
      data = frontmatter;
      break;
    }
  }

  if (!targetFile) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    slug: data.slug || slug,
    filename: targetFile.replace(/\.mdx$/, ""),
    draft: data?.draft || false, // Use optional chaining to handle missing draft field
  };
}

export function getAllBlogsMetadata(): BlogMetadata[] {
  const blogsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const defaultSlug = name.replace(/\.mdx$/, "");
      const filePath = path.join(blogsDirectory, name);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // Use custom slug from frontmatter if available, otherwise use filename
      const slug = data.slug || defaultSlug;

      return {
        title: data.title,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        slug,
        filename: defaultSlug,
        draft: data.draft || false,
      };
    })
    ?.filter((blog) => blog?.draft !== true) // Exclude drafts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export interface BlogContent extends BlogMetadata {
  content: string;
}

export function getContent(slug: string): BlogContent {
  // First try to find by custom slug in frontmatter
  const blogsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs
    .readdirSync(blogsDirectory)
    .filter((name) => name.endsWith(".mdx"));

  let targetFile = null;
  let data: any = {};
  let content = "";

  // Look for file with matching custom slug in frontmatter
  for (const filename of filenames) {
    const filePath = path.join(blogsDirectory, filename);
    const contents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content: mdxContent } = matter(contents);

    if (frontmatter.slug === slug || filename.replace(/\.mdx$/, "") === slug) {
      targetFile = filename;
      data = frontmatter;
      content = mdxContent;
      break;
    }
  }

  if (!targetFile) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    slug: data.slug || slug,
    filename: targetFile.replace(/\.mdx$/, ""),
    draft: data?.draft || false,
    content,
  };
}