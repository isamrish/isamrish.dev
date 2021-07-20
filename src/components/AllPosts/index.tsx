import * as React from "react";
import { Card } from "../Card";
import "./style.scss";
export const AllPosts = () => {
    return(
        <div className="all-posts">
            <h2 className="all-posts__label">All posts</h2>
            <div className="all-posts__posts">
                {Array.from([1,2,3,4,5,6,7,8,9,10]).map((res) => {
                    return(
                        <Card key={res} />
                    )
                })}
            </div>
        </div>
    )
}