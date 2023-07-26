import React from "react";
import Search from "@/assets/icons/Search.svg";

const SearchInput = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label
      htmlFor="search"
      className="group relative flex w-full bg-[#EEEE] px-4 py-2 rounded-md cursor-text items-center gap-2"
    >
      <Search className="fill-gray-400 group-focus-within:hidden " />
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="outline-none bg-transparent w-full"
      />
      <span
        className="absolute z-0 right-2 rotate-45 text-lg bg-gray-300 text-[#EEEE] p-2 w-2 h-2 opacity-0 group-focus-within:opacity-100 flex items-center justify-center rounded-[50%] cursor-pointer select-none"
        onClick={() => setSearch("")}
      >
        +
      </span>
    </label>
  );
};

export default SearchInput;
