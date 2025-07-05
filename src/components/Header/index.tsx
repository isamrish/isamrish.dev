import Link from "next/link";
import * as React from "react";
import { NavLinks } from "./nav-links";
import { Container } from "../Container";
export const Header = () => {
  return (
    <>
      <Container>
        <div className="py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl">
            <h2>Amrish Kushwaha</h2>
          </Link>
          <NavLinks />
        </div>
      </Container>
    </>
  );
};
