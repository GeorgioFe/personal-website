import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";

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
      <body className="flex font-inter text-[14px]">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}