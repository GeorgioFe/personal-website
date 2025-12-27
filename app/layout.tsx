import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgio Feghali",
  description: "Georgio Feghali's personal website.",
  icons: {
    icon: "/georgio_feghali_logo.png"
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter text-[14px]">
        <Sidebar />
        <main className="ml-72">{children}</main>
      </body>
    </html>
  );
}