import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./contexts/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram clone made by Anis Kehila",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
