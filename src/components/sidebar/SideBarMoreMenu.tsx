"use client";
import React from "react";
import SideBarLink from "./SideBarLink";
import Create from "@/assets/icons/NewPosts.svg";
import FloatingMenu from "../ui/FloatingMenu";
import signOut from "@/firebase/auth/signOut";

const SideBarMoreMenu = ({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <FloatingMenu
      className="bottom-8 left-14 lg:left-4 lg:bottom-20"
      open={isMenu}
      setOpen={setIsMenu}
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
              <span onClick={signOut}>Log out</span>
            </SideBarLink>
          </li>
        </ul>
      </div>
    </FloatingMenu>
  );
};

export default SideBarMoreMenu;
