"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "../../src/components/Search";
import { BlogMetadata } from "@/lib/blogs";

interface BlogsClientComponentProps {
  blogs: BlogMetadata[];
}

export const BlogsClientComponent = ({ blogs }: BlogsClientComponentProps) => {
  const [search, setSearch] = React.useState("");
  
  // Filter blogs based on search
  const filteredBlogs = blogs.filter(blog => 
    (blog.title?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (blog.category?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (blog.tags || []).some(tag => tag?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <p className="text-muted-foreground mb-6">
        <strong>Notes:</strong> Currently listed the posts which I have written on other platforms such as medium and my website.
      </p>
      
      <Search search={search} setSearch={setSearch} />
      
      <div className="space-y-6 mt-8">
        {filteredBlogs.map((blog) => (
          <article key={blog.slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <Link href={`/blog/${blog.slug}`} className="block">
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="px-2 py-1 bg-muted rounded-full text-xs">
                  {blog.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted/50 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
        
        {filteredBlogs.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No blogs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};