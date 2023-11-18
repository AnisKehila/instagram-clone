import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  DocumentData,
  QueryDocumentSnapshot,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./config";
import { Message } from "@/types";

const startConversation = async (userIds: string[]): Promise<string> => {
  const inboxRoomsRef = collection(db, "inboxRooms");

  // Query for documents where the "users" array exactly matches userIds
  const q = query(inboxRoomsRef, where("users", "==", userIds));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 0) {
    // Return the id of the first matching document
    return querySnapshot.docs[0].id;
  } else {
    // No matching document found, create a new room
    const newRoomRef = await addDoc(inboxRoomsRef, { users: userIds });
    await updateDoc(doc(db, "inboxRooms", newRoomRef.id), {
      roomId: newRoomRef.id,
    });
    // Return the id of the newly created room
    return newRoomRef.id;
  }
};

export const fetchConversation = async (convId: string) => {
  let messages: Message[] = [];
  const messagesRef = collection(db, "inboxRooms", convId, "messages");
  const snapshot = await getDocs(messagesRef);
  snapshot.forEach((msg) => messages.push(msg.data() as Message));
  const inboxRoomsRef = collection(db, "inboxRooms");
  const q = query(inboxRoomsRef, where("roomId", "==", convId));
  const querySnapshot = await getDocs(q);
  return {
    users: querySnapshot.docs[0]?.data().users as string[],
    messages: messages,
  };
};

export default startConversation;
