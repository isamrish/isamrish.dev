import * as React from "react"
import { AboutMeShort } from "../components/AboutMeShort";
import { Layout } from "../components/Layout";
import { RecentPosts } from "../components/RecentPosts";

const IndexPage = () => {
  return (
    <Layout>
        <AboutMeShort />
        <RecentPosts />
    </Layout>
  )
}

export default IndexPage
