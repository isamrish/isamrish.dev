import React from 'react';
import { Lato } from "next/font/google";
import "../global.scss";
import "../reset.scss";
import "../src/components/Layout/style.scss";
import { Layout } from "../src/components/Layout";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}