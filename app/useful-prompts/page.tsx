"use client";

import React, { useEffect, useState } from "react";
import Head from "../../src/components/Head";
import MDXContent from "../../src/components/MDXContent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface DataProps {
  title?: string;
  excerpt?: string;
}

const UsefulPrompts = () => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [data, setData] = useState<DataProps>({});

  useEffect(() => {
    async function fetchMDXContent() {
      const response = await fetch("/api/useful-prompts");
      const { mdxSource, data } = await response.json();

      setMdxSource(mdxSource);
      setData(data);
    }

    fetchMDXContent();
  }, []);

  if (!mdxSource) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head title="Useful Prompts" />
      <h1>{data.title}</h1>
      <p>{data.excerpt}</p>
      <MDXContent mdxSource={mdxSource} />
    </>
  );
};

export default UsefulPrompts;
