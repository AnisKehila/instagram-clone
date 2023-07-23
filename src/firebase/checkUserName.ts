import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import firebaseApp from "./config";

const db = getFirestore(firebaseApp);

const checkUserName = async (username: string) => {
  const usernameRef = doc(collection(db, "userNames"), username);
  const usernameSnapshot = await getDoc(usernameRef);
  return usernameSnapshot.exists();
};

export default checkUserName;
