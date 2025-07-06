import { getAllBlogsMetadata } from "@/lib/blogs";
import BlogClientPage from "./blog-client.tsx";

const BlogPage = async () => {
  const mdxBlogs = getAllBlogsMetadata();

  return <BlogClientPage mdxBlogs={mdxBlogs} />;
};

export default BlogPage;
