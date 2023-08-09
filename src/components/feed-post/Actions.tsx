import React, { useState } from "react";
import Comments from "@/assets/icons/Comment.svg";
import HeartFill from "@/assets/icons/ActivityFeed-Fiil.svg";
import Heart from "@/assets/icons/ActivityFeed.svg";
import Share from "@/assets/icons/SharePosts.svg";
import Save from "@/assets/icons/Save.svg";
import Link from "next/link";
import { Post } from "@/types";

const Actions = ({
  post,
  isLiked,
  mutate,
  isLoading,
}: {
  post: Post;
  userId: string;
  isLiked: boolean;
  mutate: () => void;
  isLoading: boolean;
  setIsLiked: (arg: boolean) => void;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button onClick={() => mutate()} disabled={isLoading}>
          {isLiked ? (
            <HeartFill className="fill-red-500 cursor-pointer" />
          ) : (
            <Heart className="cursor-pointer" />
          )}
        </button>
        <Link href={`/p/${post.postId}`}>
          <Comments className="hover:opacity-60 cursor-pointer" />
        </Link>
        <Share className="hover:opacity-60 cursor-pointer" />
      </div>
      <Save className="hover:opacity-60 cursor-pointer" />
    </div>
  );
};

export default Actions;
