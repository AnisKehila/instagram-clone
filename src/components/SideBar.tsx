"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import LogoInline from "@/assets/icons/LogoInline.svg";
import LogoBlack from "@/assets/icons/LogoBlack.svg";
import Home from "@/assets/icons/Home.svg";
import HomeFilled from "@/assets/icons/Home-fill.svg";
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
import Menu from "@mui/base/Menu";
const SideBar = () => {
  const pathname = usePathname();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
  const menuActions = React.useRef(null);

  return (
    <aside className="flex flex-col items-start w-250 h-screen px-[12px] pt-[8px] pb-5 bg-white border-r-[1px] border-gray-300 transition duration-300">
      <header className="w-full pt-[25px] pb-4 lg:px-[12px]">
        <Link
          href="/feed"
          className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]"
        >
          <LogoInline />
        </Link>
        <SideBarLink href="/feed" className="lg:hidden">
          <LogoBlack className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
        </SideBarLink>
      </header>
      <nav className="flex-grow flex flex-col">
        <SideBarLink
          isActive={pathname == "/feed" && !isSearch && !isCreatePost}
          href="/feed"
        >
          {pathname == "/feed" && !isSearch && !isCreatePost ? (
            <HomeFilled className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          ) : (
            <Home className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          )}
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Home
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={isSearch}
          href="#"
          onClick={() => setIsSearch(true)}
        >
          <Search className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Search
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={pathname == "/explore" && !isSearch && !isCreatePost}
          href="/explore"
        >
          <Explore className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Explore
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={pathname == "/reels" && !isSearch && !isCreatePost}
          href="/reels"
        >
          <Reels className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Reels
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={pathname == "/messages" && !isSearch && !isCreatePost}
          href="/messages"
        >
          <Messages className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Messages
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={pathname == "/notifications" && !isSearch && !isCreatePost}
          href="/notifications"
        >
          <Notifications className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Notifications
          </span>
        </SideBarLink>

        <SideBarLink
          isActive={isCreatePost}
          href="#"
          onClick={() => setIsCreatePost(true)}
        >
          <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Create
          </span>
        </SideBarLink>
        <SideBarLink
          isActive={
            pathname.split("/")[1] == "profile" && !isSearch && !isCreatePost
          }
          href="/profile"
        >
          <Avatar
            sx={{ width: 22, height: 22 }}
            className="transition delay-100 group-hover:scale-105 group-active:scale-95 "
          />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            Profile
          </span>
        </SideBarLink>
        <SideBarLink
          isActive={isMenu}
          onClick={() => setIsMenu(!isMenu)}
          href="#"
          className="mt-auto"
        >
          <Burger className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
          <span className="hidden lg:block w-auto lg:w-[160px] 2xl:w-[251px]">
            More
          </span>
        </SideBarLink>
        <Menu
          actions={menuActions}
          open={isMenu}
          onOpenChange={(open) => {
            setIsMenu(open);
          }}
          style={{ top: "unset" }}
          className="drop-shadow-[0_4px_12px_rgba(0,0,0,.15)] z-10 w-[266px] rounded-xl overflow-hidden bottom-8 left-14 lg:left-4 lg:bottom-20"
        >
          <div className=" flex flex-col gap-1 bg-slate-100">
            <ul className="bg-white p-2">
              <li>
                <SideBarLink href="#" className="w-full">
                  <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
                  <span>Settings</span>
                </SideBarLink>
              </li>
              <li>
                <SideBarLink href="#" className="w-full">
                  <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
                  <span>Your activity</span>
                </SideBarLink>
              </li>
              <li>
                <SideBarLink href="#" className="w-full">
                  <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
                  <span>Saved</span>
                </SideBarLink>
              </li>
              <li>
                <SideBarLink href="#" className="w-full">
                  <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
                  <span>Switch appearance</span>
                </SideBarLink>
              </li>
              <li>
                <SideBarLink href="#" className="w-full">
                  <Create className="transition delay-100 group-hover:scale-105 group-active:scale-95 " />
                  <span>Create</span>
                </SideBarLink>
              </li>
            </ul>
            <ul className="bg-white p-2 flex flex-col gap-1">
              <li>
                <SideBarLink href="#" className="w-full">
                  <span>Report a problem</span>
                </SideBarLink>
              </li>
              <hr />
              <li>
                <SideBarLink href="#" className="w-full">
                  <span>Log out</span>
                </SideBarLink>
              </li>
            </ul>
          </div>
        </Menu>
      </nav>
    </aside>
  );
};

export default SideBar;
