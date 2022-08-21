import * as React from "react";
import Head from "../components/Head";
import { Layout } from "../components/Layout";
import { About } from "../components/About";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <About />
    </Layout>
  );
};

export default AboutPage;
