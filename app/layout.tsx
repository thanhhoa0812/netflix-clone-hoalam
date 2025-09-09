import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix-like UI built with Next.js + TMDb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-bg">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
