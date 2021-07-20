import * as React from "react"
import {  ChevronRight } from "react-feather";
import { Card } from "../Card";
import { Link } from "gatsby";
import "./style.scss";
export const RecentPosts = () => {
    return(
        <div className="recent-posts">
            <h2 className="recent-posts__label">Recent Posts:</h2>
            <div className="recent-posts__posts">
            {Array.from([1,2,3]).map((res) => {
                return(
                    <Card key={res} />
                )
            })}
            </div>
            <div>
                <Link to="/blog" className="recent-posts__checkout-all">Checkout all articles<ChevronRight /></Link>
            </div>
        </div>
    )
}