import ConversationHeader from "@/components/conversation/ConversationHeader";
import { fetchUserData } from "@/firebase/fetchUserData";
import { fetchConversation } from "@/firebase/startConversation";
import React from "react";

const Room = async ({ params }: { params: { room: string } }) => {
  const { users, messages } = await fetchConversation(params.room);
  const usersData = await Promise.all(
    users.map(async (userId) => await fetchUserData(userId)),
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      <ConversationHeader users={usersData} />
    </div>
  );
};

export default Room;
