import * as React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }: { title: string }) => {
  return (
    <>
      <Helmet
        defaultTitle="Welcome | IsAmrish"
        title={title}
        titleTemplate="%s | IsAmrish"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9666200095847888"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Head;
