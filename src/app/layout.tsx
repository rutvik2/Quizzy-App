import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn(inter.className, 'antialiased min-h-screen pt-16')
      }>
        <Providers>
        {/* @ts-expect-error Async Server Component */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
