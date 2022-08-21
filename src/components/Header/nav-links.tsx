import * as React from "react";
import { Link } from "gatsby";
import "./style.scss";
export const NavLinks = (props: any) => {
  return (
    <div className="nav" {...props}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/youtube">YouTube</Link>
        </li>
        <li className="nav__item">
          <Link to="/blog">Code</Link>
        </li>
        <li className="nav__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
