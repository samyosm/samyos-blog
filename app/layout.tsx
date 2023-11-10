import type { Metadata } from "next";
import { Lexend as Font } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
