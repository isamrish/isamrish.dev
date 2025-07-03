import * as React from "react";
import Head from "../src/components/Head";
import { AboutMeShort } from "../src/components/AboutMeShort";
import { RecentPosts } from "../src/components/RecentPosts";

const IndexPage = () => {
  return (
    <>
      <Head title="Welcome to my website" />
      <AboutMeShort />
      <RecentPosts />
    </>
  );
};

export default IndexPage;