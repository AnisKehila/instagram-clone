import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth, Auth } from "firebase/auth";

const auth: Auth = getAuth(firebaseApp);

export default async function signUp(
  email: string,
  password: string
): Promise<{ result: any; error: any }> {
  let result: any = null;
  result = await createUserWithEmailAndPassword(auth, email, password);

  return result;
}
