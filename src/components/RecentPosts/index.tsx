import * as React from "react"
import {  ChevronRight } from "react-feather";
import { Card } from "../Card";
import Link from "next/link";
import { usePosts } from "../../graphql/allPostsQuery";
import "./style.scss";
export const RecentPosts = () => {
  const posts = usePosts(3);
  return (
    <div className="recent-posts">
      <h2 className="recent-posts__label">Recent Posts:</h2>
      <div className="recent-posts__posts">
        {posts.map((res: any) => {
          return <Card {...res} key={res.title} />;
        })}
      </div>
      <div>
        <Link href="/blog" className="recent-posts__checkout-all">
          Checkout all articles
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
};