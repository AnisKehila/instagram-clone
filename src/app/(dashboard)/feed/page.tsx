"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import signOut from "@/firebase/auth/signOut";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Feed = () => {
  const handleLogout = async () => {
    await signOut();
  };
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <div className="flex justify-between">
      <span>Feed</span>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Feed;
