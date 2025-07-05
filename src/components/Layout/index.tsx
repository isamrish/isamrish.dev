import { Container } from "../Container";
import { Footer } from "../Footer";
import { Header } from "../Header";
import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
