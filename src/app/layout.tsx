import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "front end developer who loves to code",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: "--font-sans"
})

const thunderFont = localFont({
  src: [
    {
      path: "./fonts/Thunder-ExtraBoldLC.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Thunder-LC.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Thunder-LightLC.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Thunder-MediumLC.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Thunder-SemiBoldLC.woff",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-thunder"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${openSans.variable} ${thunderFont.variable} antialiased`}
      >
        <div className="w-full h-screen">
          <ReactQueryProvider>
          <NavbarComponent />
            {children}
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
