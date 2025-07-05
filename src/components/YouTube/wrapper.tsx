import * as React from "react";

export const YouTubePageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>
        <h2>List of videos</h2>
      </div>
      <div>{children}</div>
      <div></div>
    </>
  );
};
