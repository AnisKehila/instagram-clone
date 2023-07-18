"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "./contexts/AuthContext";
import Loading from "./loading";
import Dashboard from "./dashboard/page";
import SignIn from "./signin/page";
export default function Home() {
  const { loading, user } = useAuthContext();
  return loading ? <Loading /> : user ? <Dashboard /> : <SignIn />;
}
