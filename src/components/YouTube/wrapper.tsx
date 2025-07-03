import * as React from "react";
import "./style.scss";

export const YouTubePageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="youtube_header">
        <h2 className="header_title">List of videos</h2>
      </div>
      <div className="youtube_video_list">{children}</div>
      <div className="youtube_footer"></div>
    </>
  );
};
