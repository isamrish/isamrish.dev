import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface LogMetadata {
  title: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  filename: string; // Add filename to track the actual file
}

export function getLogMetadata(slug: string): LogMetadata {
  // First try to find by custom slug in frontmatter
  const logsDirectory = path.join(process.cwd(), 'content/logs');
  const filenames = fs.readdirSync(logsDirectory).filter(name => name.endsWith('.mdx'));
  
  let targetFile = null;
  let data: any = {};
  
  // Look for file with matching custom slug in frontmatter
  for (const filename of filenames) {
    const filePath = path.join(logsDirectory, filename);
    const contents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(contents);
    
    if (frontmatter.slug === slug || filename.replace(/\.mdx$/, '') === slug) {
      targetFile = filename;
      data = frontmatter;
      break;
    }
  }
  
  if (!targetFile) {
    throw new Error(`Log with slug "${slug}" not found`);
  }
  
  return {
    title: data.title,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    slug: data.slug || slug,
    filename: targetFile.replace(/\.mdx$/, ''),
  };
}

export function getAllLogsMetadata(): LogMetadata[] {
  const logsDirectory = path.join(process.cwd(), 'content/logs');
  const filenames = fs.readdirSync(logsDirectory);
  
  return filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const defaultSlug = name.replace(/\.mdx$/, '');
      const filePath = path.join(logsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
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
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export interface LogContent extends LogMetadata {
  content: string;
}

export function getContent(slug: string): LogContent {
  // First try to find by custom slug in frontmatter
  const logsDirectory = path.join(process.cwd(), 'content/logs');
  const filenames = fs.readdirSync(logsDirectory).filter(name => name.endsWith('.mdx'));
  
  let targetFile = null;
  let data: any = {};
  let content = '';
  
  // Look for file with matching custom slug in frontmatter
  for (const filename of filenames) {
    const filePath = path.join(logsDirectory, filename);
    const contents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: mdxContent } = matter(contents);
    
    if (frontmatter.slug === slug || filename.replace(/\.mdx$/, '') === slug) {
      targetFile = filename;
      data = frontmatter;
      content = mdxContent;
      break;
    }
  }
  
  if (!targetFile) {
    throw new Error(`Log with slug "${slug}" not found`);
  }
  
  return {
    title: data.title,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    slug: data.slug || slug,
    filename: targetFile.replace(/\.mdx$/, ''),
    content,
  };
}