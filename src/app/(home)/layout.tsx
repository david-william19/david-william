import type { Metadata } from "next";
import "../globals.css";
import { Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import React from "react";
import NavbarComponent from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "front end developer who loves to code",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: "--font-sans"
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["400", "500", "600"]
})

const thunderFont = localFont({
  src: [
    {
      path: "../fonts/Thunder-ExtraBoldLC.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Thunder-LC.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Thunder-LightLC.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Thunder-MediumLC.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Thunder-SemiBoldLC.woff",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-thunder"
})
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${openSans.variable} ${thunderFont.variable} ${poppins.variable} bg-[#161618] antialiased`}
      >
        <div className="w-full h-fit">
          <ReactQueryProvider>
            <SmoothScrollProvider>
            <React.Fragment>
            <NavbarComponent />
            {children}
            <Footer />
            </React.Fragment>
            </SmoothScrollProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
