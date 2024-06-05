import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Favicon from './images/JEnobgwhitev2.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Ermy",
  description: "John Ermy's Portfolio Design",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
