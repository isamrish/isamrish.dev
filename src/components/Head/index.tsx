import * as React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }: { title: string }) => {
  return (
    <Helmet
      defaultTitle="Welcome | IsAmrish"
      title={title}
      titleTemplate="%s | IsAmrish"
    />
  );
};

export default Head;
