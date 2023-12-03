"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import useRealTimeChat from "@/hooks/useRealTimeChat";
import dayjs from "dayjs";
import React from "react";
const Chat = ({ roomId }: { roomId: string }) => {
  const { userData } = useAuthContext();
  const [chat, setChat] = useRealTimeChat({ roomId: roomId });
  console.log(chat);
  return (
    <ul className="flex flex-col gap-2">
      {chat.length > 0
        ? chat.map((message) => (
            <li key={message.time.toMillis()}>
              {message.content} {"->"} {dayjs(message.time.toDate()).format()}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Chat;
