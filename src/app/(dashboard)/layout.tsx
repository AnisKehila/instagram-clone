import SideBar from "@/components/sidebar/SideBar";
import React from "react";
import { Metadata } from "next";
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
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}
