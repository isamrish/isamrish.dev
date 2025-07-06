import * as React from "react"
import {  ChevronRight } from "react-feather";
import { Card } from "../Card";
import Link from "next/link";
import { usePosts } from "../../graphql/allPostsQuery";
import { getAllBlogsMetadata, BlogMetadata } from "../../../lib/blogs";

interface Post {
  title: string;
  tags: string[];
  featured_image: string;
  date: string;
  url?: string;
  slug?: string;
  excerpt?: string;
}

// Convert BlogMetadata to Post format for consistency
function convertBlogToPost(blog: BlogMetadata): Post {
  return {
    title: blog.title,
    date: blog.date,
    tags: blog.tags || [],
    featured_image: "", // MDX posts don't have featured images
    excerpt: `Recent blog post in category: ${blog.category}`,
    slug: `/blog/${blog.slug}`,
  };
}

export const RecentPosts = () => {
  const jsonPosts: Post[] = usePosts(3);

  // Get MDX blog posts
  const mdxBlogs = getAllBlogsMetadata();
  const mdxPosts = mdxBlogs.map(convertBlogToPost);

  // Combine and sort all posts by date
  const allPosts = [...mdxPosts, ...jsonPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Take the 3 most recent posts
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Recent Posts:</h2>
      <div className="flex flex-col gap-6">
        {recentPosts.map((res: Post) => {
          return <Card {...res} key={res.title} />;
        })}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Checkout all articles
          <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};