import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";

const gaegu = Gaegu({ subsets: ["latin"], weight: ["400"] });

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

export const metadata: Metadata = {
  title: "Angel's Personal Website",
  description: "A personal website for Angel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={gaegu.className} // change font l8r
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
