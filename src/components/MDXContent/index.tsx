"use client";

import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


const components = {
  code: (props: any) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(props.children);
      toast("Copied")
    };

    return (
      <div style={{ position: "relative" }}>
        <Button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
        >
          Copy
        </Button>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "4px",
            lineHeight: "1.5",
          }}
        >
          <code {...props} />
        </pre>
      </div>
    );
  },
};

const MDXContent = ({ mdxSource }: { mdxSource: any }) => {
  return (
    <>
      <MDXRemote {...mdxSource} components={components} />
    </>
  );
};

export default MDXContent;