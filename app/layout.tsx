import { Lato } from "next/font/google";
import React from "react";
import "./globals.css"; // Import Tailwind CSS
import "../reset.scss";
import "../src/components/Layout/style.scss";
import { Layout } from "../src/components/Layout";
import { Toaster } from "@/components/ui/sonner";


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
        <Toaster />
      </body>
    </html>
  );
}