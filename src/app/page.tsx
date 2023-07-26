"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";
export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/feed");
    } else {
      router.push("/signin");
    }
  }, [user, router]);
  return <Loading />;
}
