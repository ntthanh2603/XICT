import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XICT - Home",
  description: "A modern website for XICT built with Next.js, Shadcn, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}