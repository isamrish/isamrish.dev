// import { useState } from "react";
import { Link } from "gatsby";
import * as React from "react";
// import { AlignRight, X } from "react-feather";
// import { useDevice } from "../../hooks/useDevice";
import { NavLinks } from "./nav-links";
import "./style.scss";
export const Header = () => {
  //   const { device } = useDevice();
  //   const [show, setShow] = useState(false);
  //   const handleMobile = () => {
  //     setShow(!show);
  //   };
  return (
    <>
      <div className="header">
        <Link to="/" className="logo">
          <h2>Amrish Kushwaha</h2>
        </Link>
        <NavLinks />
      </div>
    </>
  );
};
