import { getBlogMetadata, getAllBlogsMetadata } from '@/lib/blogs';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = getBlogMetadata(slug);
  
  // Read and parse the MDX file
  const blogsDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(blogsDirectory, `${metadata.filename}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);

  return (
    <article className="max-w-4xl mx-auto py-8">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-xl font-bold mb-4 text-foreground">
          {metadata.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={metadata.date}>
            {new Date(metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="px-2 py-1 bg-muted rounded-full text-xs">
            {metadata.category}
          </span>
        </div>
      </header>

      <div className="text-muted-foreground leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-xl font-semibold text-foreground mb-4 mt-8">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg font-semibold text-foreground mb-3 mt-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-semibold text-foreground mb-2 mt-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-muted-foreground leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 text-muted-foreground">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 text-muted-foreground">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ children }) => (
              <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                {children}
              </pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground/80 mb-4">
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const metadata = getBlogMetadata(slug);
  
  return {
    title: metadata.title,
    description: `${metadata.category} blog from ${metadata.date}`,
    keywords: metadata.tags,
  };
}

export function generateStaticParams() {
  const blogs = getAllBlogsMetadata();
  return blogs
    ?.filter((blog) => !blog?.draft)
    .map((blog) => ({ slug: blog.slug }));
}

export const dynamicParams = false;