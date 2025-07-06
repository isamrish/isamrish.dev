import postsData from "../data/posts.json";
import _ from "lodash";

interface Post {
  title: string;
  tags: string[];
  featured_image: string;
  date: string;
  url?: string;
  slug?: string;
  excerpt?: string;
}

export const usePosts = (count?: number): Post[] => {
  const posts: Post[] = postsData.posts;
  const sortedPosts = _.orderBy(posts, ["date"], ["desc"]);
  return count
    ? _.filter(sortedPosts, (_: Post, index: number) => index < count)
    : sortedPosts;
};
