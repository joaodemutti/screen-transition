"use client";

import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className="relative w-full h-screen overflow-auto bg-[var(--background)] text-foreground pt-16">
        {/* Fixed Navbar */}
        <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-4 z-[999]">
          <h1 className="font-bold">Navbar</h1>
        </nav>

        {/* Only this container slides */}
          <div
            className="w-full h-full relative bg-white z-[50]"
            style={{ viewTransitionName: "page" }}
          >
            {children}
          </div>
      </body>
    </html>
    </ViewTransitions>
  );
}
