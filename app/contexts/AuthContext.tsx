"use client";
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { onAuthStateChanged, getAuth, User, Unsubscribe } from "firebase/auth";
import firebaseApp from "../firebase/config";

const auth = getAuth(firebaseApp);
type AuthContextProps = {
  user: User | null;
};
type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextProps>({ user: null });

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
