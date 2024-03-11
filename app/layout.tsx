import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Gazers Club NASA APOD",
  description:
    "Star Gazers Club NASA APOD is a website that displays NASA's Astronomy Picture of the Day using NASA's API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
