import * as React from "react";
import Head from "../components/Head";
import { AboutMeShort } from "../components/AboutMeShort";
import { Layout } from "../components/Layout";
import { RecentPosts } from "../components/RecentPosts";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Welcome to my website" />
      <AboutMeShort />
      <RecentPosts />
    </Layout>
  );
};

export default IndexPage;
