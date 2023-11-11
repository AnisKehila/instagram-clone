import React, { useState } from "react";
import Modal from "../ui/Modal";
import Exit from "@/assets/icons/Exit.svg";
import SearchInput from "../ui/SearchInput";
import { UserData } from "@/types";

const SendMessageModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([{} as UserData]);
  return (
    <Modal
      open={isOpen}
      setOpen={setIsOpen}
      className="w-full mx-2 md:w-[548px] "
    >
      <div className="flex items-center border-b p-4">
        <span className="w-full text-center text-lg font-semibold">
          New message
        </span>
        <Exit className="cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>
      <div className="flex items-center p-3">
        <span className="text-lg font-semibold">To: </span>
        <SearchInput
          searchValue={search}
          setSearch={setSearch}
          setIsLoading={setIsLoading}
          setResults={setResults}
        />
      </div>
    </Modal>
  );
};

export default SendMessageModal;
