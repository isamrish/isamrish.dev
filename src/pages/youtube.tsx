import * as React from "react";
import Head from "../components/Head";
import { YouTube } from "../components/YouTube";
import { Layout } from "../components/Layout";

const YouTubePage = () => {
  return (
    <Layout>
      <Head title="YouTube" />
      <YouTube />
    </Layout>
  );
};

export default YouTubePage;
