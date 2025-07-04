import * as React from "react";
import { Card } from "../Card";
import "./style.scss";

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
    <div className="all-posts">
      <h2 className="all-posts__label">
        All posts {search ? `: ${search}` : null}
      </h2>
      <div className="all-posts__posts">
        {posts.map((res: Post) => {
          return <Card {...res} key={res.title} />;
        })}
      </div>
    </div>
  );
};
