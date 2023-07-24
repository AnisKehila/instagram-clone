"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import Dashboard from "./dashboard/page";
import SignIn from "./signin/page";

export default function Home() {
  const { user } = useAuthContext();
  return user ? <Dashboard /> : <SignIn />;
}
