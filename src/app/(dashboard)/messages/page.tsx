"use client";
import React from "react";
import MessageIcon from "@/assets/icons/Messenger.svg";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <div className="flex flex-col gap-3">
        <MessageIcon />
        <span>Your messages</span>
        <span>Send private photos and messages to a friend or group.</span>
      </div>
    </div>
  );
};

export default page;
