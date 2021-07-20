import * as React from "react";
import "./style.scss";

export const Search = () => {
    return(
        <div className="search">
            <input type="text" placeholder="Search by posts or tags" className="search__input" />
        </div>
    )
}