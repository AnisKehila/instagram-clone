import {
  getFirestore,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import firebaseApp from "./config";
import { UserData } from "@/types";

const db = getFirestore(firebaseApp);

const fetchUserData = async (uid: string): Promise<UserData> => {
  const userIdRef = doc(collection(db, "users"), uid);
  const userDAta = await getDoc(userIdRef);
  return userDAta.data() as UserData;
};

export const fetchUserDataByUserName = async (
  userName: string
): Promise<UserData | null> => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userName", "==", userName));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    throw new Error("No user found!");
  }

  const userData = querySnapshot.docs[0].data() as UserData;
  return userData;
};

export default fetchUserData;
