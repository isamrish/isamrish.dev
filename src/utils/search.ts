import _ from 'lodash';
export const searchByPostsOrTags = (posts: any[], search?: string) => {
  if (!search) {
    return posts;
  }
  search = search.toLowerCase();
  const searchedPosts = posts.filter(
    (post) =>
      post.tags.find((tag: any) => tag.toLowerCase().match(search)) ||
      post.title.toLowerCase().match(search)
  );
  return _.uniqBy(searchedPosts, "title");
};