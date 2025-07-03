import postsData from "../data/posts.json";
import _ from "lodash";

export const usePosts = (count?: number) => {
  const posts: { date: string }[] = postsData.posts;
  const sortedPosts = _.orderBy(posts, ["date"], ["desc"]);
  return count
    ? _.filter(
        sortedPosts,
        (_: { date: string }, index: number) => index < count
      )
    : sortedPosts;
};
