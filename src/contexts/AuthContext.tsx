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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "@/app/loading";

const auth = getAuth(firebaseApp);
type AuthContextProps = {
  user: User | null;
  loading: boolean;
};
type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
});
const queryClient = new QueryClient();

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
  const value = {
    user,
    loading,
  };
  if (loading) return <Loading />;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </QueryClientProvider>
  );
};
