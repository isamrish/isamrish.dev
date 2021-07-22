import * as React from "react";
import "./style.scss";

interface TagProps {
    tag: string;
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
    return(
        <span className="tag">{tag}</span>
    )
}