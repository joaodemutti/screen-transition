"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      // Browser back (or forward) triggered
      setIsBack(true);

      // Reset after animation so normal navigation works
      setTimeout(() => setIsBack(false), 600); // match your CSS duration
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          data-direction={isBack ? "back" : "forward"}
          className="relative w-full h-screen overflow-auto bg-[var(--background)] text-foreground pt-16"
        >
          {/* Fixed Navbar */}
          <nav className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-4 z-[999]">
            <h1 className="font-bold">Navbar</h1>
          </nav>

          {/* Sliding container */}
          <div
            key={pathname}
            className="w-full h-full relative bg-white z-[50]"
            style={{
              viewTransitionName: "page",
              ["viewTransitionClass" as any]: isBack ? "back" : "forward",
            }}
          >
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
