import ConversationList from "@/components/conversation-list/ConversationList";
import React from "react";

const Messages = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="w-[27%]">
        <ConversationList />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Messages;
