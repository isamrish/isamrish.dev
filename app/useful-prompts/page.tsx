"use client";

import React, { useEffect, useState } from "react";
import Head from "../../src/components/Head";
import MDXContent from "../../src/components/MDXContent";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Separator } from "@/components/ui/separator";

interface DataProps {
  title?: string;
  excerpt?: string;
}

const UsefulPrompts = () => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
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
      <h1 className="text-3xl pt-4">{data.title}</h1>
      <p className="text-sm mb-4">{data.excerpt}</p>
      <Separator className="my-6" />
      <MDXContent mdxSource={mdxSource} />
    </>
  );
};

export default UsefulPrompts;
