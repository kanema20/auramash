import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"], // You can add subsets like 'latin', 'latin-ext', etc. as needed
});

export const metadata: Metadata = {
  title: "FACEMASH [auramaxxing edition]",
  description: "get your aura up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={rajdhani.className}>
          {children}
          <Analytics />
        </body>
      </Providers>
    </html>
  );
}
