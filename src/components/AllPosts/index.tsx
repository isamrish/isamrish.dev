import * as React from "react";
import { Card } from "../Card";
import "./style.scss";

export const AllPosts = ({ ...props }) => {
    const { posts, search } = props;
    return(
        <div className="all-posts">
            <h2 className="all-posts__label">All posts { search ? `: ${search}` : null}</h2>
            <div className="all-posts__posts">
                {posts.map((res) => {
                    return(
                        <Card {...res} key={res.title} />
                    )
                })}
            </div>
        </div>
    )
}
