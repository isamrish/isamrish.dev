import * as React from "react";
import { YouTubePageWrapper } from "./wrapper";
import { ytVideos } from "../../data/youtube";

export const YouTube = () => {
  const width = 430;
  const aspectRatio = 315 / 560;
  const height = aspectRatio * width;
  return (
    <YouTubePageWrapper>
      {ytVideos.map((video) => {
        return (
          <div
            key={video.url}
            dangerouslySetInnerHTML={{
              __html: `<iframe
                 width="${width}"
                 height="${height}"
                 src='${video.url}' 
                 title="YouTube video player"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen 
                />`,
            }}
          />
        );
      })}
    </YouTubePageWrapper>
  );
};
