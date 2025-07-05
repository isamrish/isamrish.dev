"use client";

import { Copy, ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const components = {
  code: (props: any) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(props.children);
      toast("Copied to clipboard");
    };

    const handleRunOnChatGPT = () => {
      const chatGPTURL = `https://chat.openai.com/?prompt=${encodeURIComponent(
        props.children
      )}`;
      window.open(chatGPTURL, "_blank");
      toast("Opening in ChatGPT");
    };

    return (
      <div className="relative group p-1 mb-4">
        <pre className="rounded-md p-4 overflow-auto bg-gray-200 text-black text-sm">
          <code {...props} />
        </pre>

        <div className="my-2">
          <Button
            onClick={handleCopy}
            variant="secondary"
            className="mr-4"
          >
            <Copy className="mr-2" />
            Copy
          </Button>
          <Button
            onClick={handleRunOnChatGPT}
            variant="default"
          >
            <ExternalLink className="mr-2" />
            Run
          </Button>
        </div>
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