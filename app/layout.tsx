"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./api/AuthContext";
import Header from "@/app/components/Header";
import RepositoryActionBar from "./components/RepositoryActionBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-col`}>
        <AuthContextProvider>
          <Header />
          <RepositoryActionBar />
          <main className="h-full pt-20">{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}