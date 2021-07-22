import * as React from "react";
import { Link } from "gatsby";
import "./style.scss";
export const NavLinks = (props) => {
    return(
        <div className="nav" {...props}>
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="nav__item">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}