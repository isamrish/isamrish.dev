import * as React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Container } from "../Container";
import "./style.scss";

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
