import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "imdb Clone created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="h-16 md:h-18 px-5 md:px-8 lg:px-0 lg:w-[92%] xl:w-[90%] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
