import { Lato } from "next/font/google";
import React from "react";
import "./globals.css";
import { Layout } from "../src/components/Layout";
import { Toaster } from "@/components/ui/sonner";


const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Amrish Kushwaha",
  description: "Personal website and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}