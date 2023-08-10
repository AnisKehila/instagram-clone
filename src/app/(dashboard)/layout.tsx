import SideBar from "@/components/sidebar/SideBar";
import React from "react";
import { Metadata } from "next";
import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
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
    <div className="sm:flex">
      <Header />
      <SideBar />
      {children}
      <Navigation />
    </div>
  );
}
