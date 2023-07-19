import "./assets/styles/globals.css";
import type { Metadata } from "next";
import { AuthContextProvider } from "./contexts/AuthContext";
export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram clone made by Anis Kehila",
  icons: "/logoIcon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-instaSans bg-white text-black"
        suppressHydrationWarning={true}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
