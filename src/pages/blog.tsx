import * as React from "react"
import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { AllPosts } from "../components/AllPosts";
import { usePosts } from "../graphql/allPostsQuery";
import { searchByPostsOrTags } from "../utils/search";
const BlogPage = () => {
  const [search, setSearch] = React.useState('');
  const posts = usePosts();
  let searchedPosts = searchByPostsOrTags(posts, search);
  React.useEffect(() => {
    searchedPosts = searchByPostsOrTags(posts, search);
  }, [search]);
  
  return (
    <Layout>
        <h2>Blog</h2>
        <Search search={search} setSearch={setSearch}  />
        <AllPosts posts={searchedPosts} search={search} />
    </Layout>
  )
}

export default BlogPage