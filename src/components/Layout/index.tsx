import { Container } from "../Container";
import { Footer } from "../Footer";
import { Header } from "../Header";
import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
      </div>
      <Container>{children}</Container>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};
