import SideBar from "@/components/sidebar/SideBar";
import React from "react";
import { Metadata } from "next";
import Header from "@/components/header/Header";
import Navigation from "@/components/navigation/Navigation";
import { getAuth } from "firebase/auth";
import { redirect } from "next/navigation";
import firebaseApp from "@/firebase/config";

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
    <div className="sm:flex min-h-screen pb-20 sm:pb-0 dark:bg-[#000000] dark:text-white">
      <Header />
      <SideBar />
      {children}
      <Navigation />
    </div>
  );
}
