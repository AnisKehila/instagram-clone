"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Comment, Post } from "@/types";
import FeedPost from "@/components/feed-post/FeedPost";
import { Avatar } from "@mui/material";
import Link from "next/link";
import signOut from "@/firebase/auth/signOut";
import PostSkeleton from "@/components/feed-post/PostSkeleton";
const Feed = () => {
  const { user, userData } = useAuthContext();
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        let post = change.doc.data() as Post;
        const postIndex = posts.findIndex((p) => p.postId == post.postId);
        if (change.type == "added") {
          // Handle added post and initial state
          if (postIndex === -1 && post.postId) {
            const commentsRef = collection(
              db,
              "posts",
              post.postId,
              "comments",
            );
            let comments: Comment[] = [];
            const fetch = await getDocs(commentsRef);
            fetch.forEach((comment) =>
              comments.push(comment.data() as Comment),
            );
            post = {
              ...post,
              comments: comments,
            };
            setPosts((prevData) => [...prevData, post]);
          }
        } else if (change.type == "modified") {
          // Handle modified post
          if (postIndex !== -1) {
            setPosts((prevData) => {
              const updatedPosts = [...prevData];
              updatedPosts[postIndex] = post;
              return updatedPosts;
            });
          }
        } else if (change.type == "removed") {
          // Handle removed post
          if (postIndex !== -1) {
            setPosts((prevData) =>
              prevData.filter((p) => p.postId !== post.postId),
            );
          }
        }
      });
    });
    return () => {
      unsub();
    };
  }, [posts]);
  return (
    <div className="scroll-smooth grid grid-cols-6 mt-8 max-w-5xl w-full mx-auto">
      <div className="lg:col-span-4 col-span-6">
        {/* Stories */}
        {/* Posts */}
        <div className="flex flex-col justify-center items-center">
          {posts.length > 0
            ? posts.map((post) => (
                <FeedPost key={post.postId} postData={post} />
              ))
            : Array.from({ length: 4 }).map((ele, i) => (
                <PostSkeleton key={i} />
              ))}
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2">
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
