"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Post } from "@/types";
import FeedPost from "@/components/feed-post/FeedPost";
import { Avatar } from "@mui/material";
import Link from "next/link";
import signOut from "@/firebase/auth/signOut";
const Feed = () => {
  const { user, userData } = useAuthContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  useEffect(
    () => {
      const unsub = onSnapshot(collection(db, "posts"), (docs) => {
        docs.forEach((post) => setPosts([...posts, post.data() as Post]));
      });
      return () => {
        unsub();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [db],
  );
  return (
    <div className="grid grid-cols-6 mt-8 max-w-5xl w-full mx-auto">
      <div className="lg:col-span-4 col-span-6">
        {/* Stories */}
        {/* Posts */}
        <div className="flex flex-col justify-center items-center">
          {posts.length > 0 &&
            posts.map((post) => <FeedPost key={post.postId} postData={post} />)}
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Link href={`/${userData?.userName}`}>
              <Avatar
                className="w-[56px] h-[56px]"
                src={userData?.profileImage}
              />
            </Link>
            <div className="flex flex-col">
              <Link className="font-semibold" href={`/${userData?.userName}`}>
                {userData?.userName}
              </Link>
              <span className="text-gray-600">{userData?.fullName}</span>
            </div>
          </div>
          <button
            className="text-sm text-red-500 hover:opacity-60 font-semibold"
            onClick={signOut}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
