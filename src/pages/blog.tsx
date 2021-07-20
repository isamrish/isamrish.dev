import * as React from "react"
import { Layout } from "../components/Layout";
import { Search } from "../components/Search";
import { AllPosts } from "../components/AllPosts";

const BlogPage = () => {
  return (
    <Layout>
        <h2>Blog</h2>
        <Search />
        <AllPosts />
    </Layout>
  )
}

export default BlogPage