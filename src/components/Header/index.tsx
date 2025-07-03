// import { useState } from "react";
import Link from "next/link";

import * as React from "react";
// import { AlignRight, X } from "react-feather";
// import { useDevice } from "../../hooks/useDevice";
import { NavLinks } from "./nav-links";
import { Container } from "../Container";
import "./style.scss";
export const Header = () => {
  //   const { device } = useDevice();
  //   const [show, setShow] = useState(false);
  //   const handleMobile = () => {
  //     setShow(!show);
  //   };
  return (
    <>
      <Container>
        <div className="header">
          <Link href="/" className="logo">
            <h2>Amrish Kushwaha</h2>
          </Link>
          <NavLinks />
        </div>
      </Container>
    </>
  );
};
