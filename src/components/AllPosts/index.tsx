import * as React from "react";
import { Card } from "../Card";

interface Post {
  title: string;
  tags: [string]; // Adjusted to match the expected type in CardProps
  featured_image: string;
  date: Date; // Adjusted to match the expected type in CardProps
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((res: Post) => {
          return <Card {...res} key={res.title} />;
        })}
      </div>
    </div>
  );
};
