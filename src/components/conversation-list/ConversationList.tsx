"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";
import NoteIcon from "@/assets/icons/Note.svg";
import SendMessageModal from "../modals/SendMessageModal";
const ConversationList = () => {
  const { userData } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-r border-[#A8A8A8] min-h-screen">
      <div className="flex px-7 py-8 w-full justify-between">
        <span className="font-bold text-xl">{userData?.userName}</span>
        <span onClick={() => setIsOpen(true)} className="cursor-pointer">
          <NoteIcon />
        </span>
      </div>
      <span className="px-7 font-bold text-[17px]">Messages</span>
      <SendMessageModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ConversationList;
