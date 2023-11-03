"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";

const ConversationList = () => {
  const { userData } = useAuthContext();
  return (
    <div>
      <div className="flex">
        <div className="font-bold">{userData?.userName}</div>
      </div>
    </div>
  );
};

export default ConversationList;
