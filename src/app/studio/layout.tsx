import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "front end developer who loves to code",
};

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
      <body>
        <div className="w-full bg-[#07131c] h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}
