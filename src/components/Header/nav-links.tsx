import * as React from "react";
import Link from "next/link";

import "./style.scss";
export const NavLinks = (props: any) => {
  return (
    <div className="nav" {...props}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/youtube">YouTube</Link>
        </li>
        <li className="nav__item">
          <Link href="/blog">Code</Link>
        </li>
        <li className="nav__item">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
