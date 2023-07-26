import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth, Auth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const auth: Auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default async function signUp({
  email,
  password,
  fullName,
  username,
}: {
  email: string;
  password: string;
  fullName: string;
  username: string;
}) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save additional user information in Firestore
    const userRef = doc(collection(db, "users"), user.uid);
    await setDoc(userRef, {
      fullName: fullName,
      userName: username,
      email: email,
      createdAt: new Date(),
    });
    const usernameRef = doc(collection(db, "userNames"), username);
    await setDoc(usernameRef, {
      uid: user.uid,
    });
    // Return the user information
    return user;
  } catch (error) {
    // Handle any errors that might occur during the process
    throw error;
  }
}
