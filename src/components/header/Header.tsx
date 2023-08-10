"use client";
import React, { useState } from "react";
import LogoBlack from "@/assets/icons/LogoBlack.svg";
import Heart from "@/assets/icons/ActivityFeed.svg";
import Link from "next/link";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="sm:hidden px-4 sticky top-0 bg-white border-b shadow-sm z-30 w-full">
      <div className="flex justify-between items-center py-3">
        <Link
          href="/feed"
          className="transition duration-100 scale-150 hover:scale-[1.6] active:scale-125 mr-1 "
        >
          <LogoBlack />
        </Link>
        <div className="flex items-center gap-5">
          <SearchInput search={search} setSearch={setSearch} />
          <Link
            href="/notifications"
            className="transition duration-100 scale-110 hover:scale-[1.2] active:scale-100 active:opacity-60 "
          >
            <Heart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
