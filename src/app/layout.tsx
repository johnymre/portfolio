import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Favicon from './images/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Ermy",
  description: "John Ermy's Portfolio",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="%PUBLIC_URL%/images/featuredimg.png" />
      </head>
      <body className={inter.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
