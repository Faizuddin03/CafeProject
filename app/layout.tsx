import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tempting = localFont({
  src: "./fonts/Tempting - PERSONAL USE ONLY.otf",
  variable: "--font-tempting",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Cafe Landing Page",
  description:
    "A modern cafe landing page with menu highlights, location details, and reservation intake.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${tempting.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-copy-primary">
        {children}
      </body>
    </html>
  );
}
