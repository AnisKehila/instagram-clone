"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Post } from "@/types";
import FeedPost from "@/components/feed-post/FeedPost";
const Feed = () => {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (docs) => {
        docs.forEach((post) => setPosts([...posts, post.data() as Post]));
      }),
    []
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
      <div className="lg:col-span-2"></div>
    </div>
  );
};

export default Feed;
