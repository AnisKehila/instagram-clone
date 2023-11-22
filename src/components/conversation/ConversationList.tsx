"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";
import NoteIcon from "@/assets/icons/Note.svg";
import SendMessageModal from "../modals/SendMessageModal";
import { useQuery } from "@tanstack/react-query";
import { fetchMessagingRooms } from "@/firebase/startConversation";
const ConversationList = () => {
  const { userData } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { isFetching } = useQuery({
    queryKey: ["messaging-rooms"],
    queryFn: () => fetchMessagingRooms(userData?.userId || ""),
    onSuccess: (data) => console.log(data),
  });
  return (
    <div className="border-r border-[#A8A8A8] dark:border-neutral-800 min-h-screen">
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
