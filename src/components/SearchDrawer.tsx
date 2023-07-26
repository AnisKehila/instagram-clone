"use client";
import React, { useEffect, useRef, useState } from "react";

import SearchInput from "./ui/SearchInput";

const SearchDrawer = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        isActive
      ) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsActive, isActive]);
  return (
    <div
      className={`fixed h-screen shadow-[4px_0_24px_rgba(0,0,0,.15)] bg-white top-0 transition-all overflow-hidden duration-300 w-0 ${
        isActive && "w-[397px] left-[4.6rem] z-10  px-4 py-5"
      } ${!isActive && "left-10"}`}
      ref={drawerRef}
    >
      <h2 className="font-[600] text-[24px]">Search</h2>
      <div className="mt-8">
        <SearchInput search={search} setSearch={setSearch} />
      </div>
      <div className="mt-8"></div>
    </div>
  );
};
export default SearchDrawer;
