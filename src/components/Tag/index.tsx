import * as React from "react";

interface TagProps {
  tag: string;
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md">
      {tag}
    </span>
  );
};
