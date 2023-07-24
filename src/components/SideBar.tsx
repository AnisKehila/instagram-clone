"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LogoInline from "@/assets/icons/LogoInline.svg";
import LogoBlack from "@/assets/icons/LogoBlack.svg";
import Home from "@/assets/icons/Home.svg";
import Search from "@/assets/icons/Search.svg";
import Explore from "@/assets/icons/FindPeople.svg";
import Messages from "@/assets/icons/Messenger.svg";
import Reels from "@/assets/icons/Reels.svg";
import Notifications from "@/assets/icons/ActivityFeed.svg";
import Create from "@/assets/icons/NewPosts.svg";
import Burger from "@/assets/icons/Burger.svg";
import SideBarLink from "./SideBarLink";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col items-start w-250 h-screen px-[12px] pt-[8px] pb-5 bg-white border-r-[1px] border-gray-300 transition duration-300">
      <header className="w-full pt-[25px] pb-4 lg:px-[12px]">
        <Link href="/feed" className="hidden lg:block">
          <LogoInline />
        </Link>
        <SideBarLink isActive={false} href="/feed" className="lg:hidden">
          <LogoBlack className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
        </SideBarLink>
      </header>
      <nav className="flex-grow flex flex-col">
        <SideBarLink isActive={false} href="/feed">
          <Home className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Home</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="#">
          <Search className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Search</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Explore className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Explore</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Reels className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Reels</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Messages className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Messages</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Notifications className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Notifications</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">Create</span>
        </SideBarLink>

        <SideBarLink isActive={false} href="/">
          <Avatar
            sx={{ width: 22, height: 22 }}
            className="transition delay-100 group-hover:scale-105 group-active:scale-95 "
          />
          <span className="hidden lg:block">Profile</span>
        </SideBarLink>
        <SideBarLink isActive={false} href="#" className="mt-auto">
          <Burger className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block">More</span>
        </SideBarLink>
      </nav>
    </aside>
  );
};

export default SideBar;
