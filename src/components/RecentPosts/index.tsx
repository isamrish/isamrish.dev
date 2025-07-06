import * as React from "react"
import {  ChevronRight } from "react-feather";
import { Card } from "../Card";
import Link from "next/link";
import { usePosts } from "../../graphql/allPostsQuery";

interface Post {
  title: string;
  tags: string[];
  featured_image: string;
  date: string;
  url?: string;
  slug?: string;
  excerpt?: string;
}

export const RecentPosts = () => {
  const posts: Post[] = usePosts(3);
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Recent Posts:</h2>
      <div className="flex flex-col gap-6">
        {posts.map((res: Post) => {
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