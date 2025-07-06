"use client";

import * as React from "react";
import Head from "../../src/components/Head";
import { Search } from "../../src/components/Search";
import { AllPosts } from "../../src/components/AllPosts";
import { usePosts } from "../../src/graphql/allPostsQuery";
import { searchByPostsOrTags } from "../../src/utils/search";
import { BlogMetadata } from "@/lib/blogs";

function convertBlogToPost(blog: BlogMetadata) {
  return {
    title: blog.title,
    date: new Date(blog.date),
    tags: blog.tags || [],
    featured_image: null,
    excerpt: `Local blog post in category: ${blog.category}`,
    slug: `/blog/${blog.slug}`,
    category: blog.category,
    filename: blog.filename
  };
}

interface BlogClientPageProps {
  mdxBlogs: BlogMetadata[];
}

const BlogClientPage = ({ mdxBlogs }: BlogClientPageProps) => {
  const [search, setSearch] = React.useState("");
  
  const jsonPosts = usePosts();
  
  const mdxPosts = mdxBlogs.map(convertBlogToPost);
  
  const allPosts = [...mdxPosts, ...jsonPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const searchedPosts = searchByPostsOrTags(allPosts, search);

  return (
    <>
      <Head title="Blog List" />
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl pt-4">Blog</h2>
        <p>
          <strong className="bold">Notes:</strong> Currently listed the posts
          which I have written on other platforms such as medium and my website,
          as well as local blog posts.
        </p>
        <Search search={search} setSearch={setSearch} />
        <AllPosts posts={searchedPosts} search={search} />
      </div>
    </>
  );
};

export default BlogClientPage;