import * as React from "react";
import Head from "next/head";

const CustomHead = ({ title }: { title: string }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | IsAmrish` : "Welcome | IsAmrish"}</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9666200095847888"
          crossOrigin="anonymous"
        />
      </Head>
    </>
  );
};

export default CustomHead;
