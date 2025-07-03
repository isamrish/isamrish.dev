"use client";

import * as React from "react";
import Head from "../../src/components/Head";
import { Search } from "../../src/components/Search";
import { AllPosts } from "../../src/components/AllPosts";
import { usePosts } from "../../src/graphql/allPostsQuery";
import { searchByPostsOrTags } from "../../src/utils/search";

const BlogPage = () => {
  const [search, setSearch] = React.useState("");
  const posts = usePosts();
  let searchedPosts = searchByPostsOrTags(posts, search);
  React.useEffect(() => {
    searchedPosts = searchByPostsOrTags(posts, search);
  }, [search]);

  return (
    <>
      <Head title="Blog List" />
      <h2>Blog</h2>
      <p>
        <strong>Notes:</strong> Currently listed the posts which I have written
        on other platforms such as medium and my website.
      </p>
      <Search search={search} setSearch={setSearch} />
      <AllPosts posts={searchedPosts} search={search} />
    </>
  );
};

export default BlogPage;
