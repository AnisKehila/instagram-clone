"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Feed = () => {
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
    </div>
  );
};

export default Feed;
