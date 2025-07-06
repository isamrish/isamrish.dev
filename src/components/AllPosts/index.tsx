import * as React from "react";
import { Card } from "../Card";

interface Post {
  title: string;
  tags: string[]; // Changed to string array
  featured_image: string;
  date: string; // Changed to string
  [key: string]: any; // Extendable for other properties
}

export const AllPosts = ({
  posts,
  search,
}: {
  posts: Post[];
  search?: string;
}) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        All posts {search ? `: ${search}` : null}
      </h2>
      <div className="flex flex-col gap-6">
        {posts.map((res: Post) => {
          return <Card {...res} key={res.title} />;
        })}
      </div>
    </div>
  );
};
