import * as React from "react"
import { AboutMeShort } from "../components/AboutMeShort";
import { Layout } from "../components/Layout";
import { RecentPosts } from "../components/RecentPosts";
import { useScreenWidth } from "../hooks/useScreenWidth";
// markup
const IndexPage = () => {
  console.log(useScreenWidth(), " useScreenWidth");
  return (
    <Layout>
        <AboutMeShort />
        <p style={{ lineHeight: '30px'}}>Welcome and thanks for stopping by. I have written many of the article in the field of front end development. You can just able to write and do it and achieve something which is better for you. Just keep learning. You can check all of my blogs  and projects on which I have worked on.</p>
        <RecentPosts />
    </Layout>
  )
}

export default IndexPage
