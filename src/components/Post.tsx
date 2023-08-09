"use client";
import { Comment } from "@/types";
import React, { useEffect, useState } from "react";
import Dots from "@/assets/icons/More.svg";
import Comments from "@/assets/icons/Comment.svg";
import Heart from "@/assets/icons/ActivityFeed-Fiil.svg";
import Share from "@/assets/icons/SharePosts.svg";
import Save from "@/assets/icons/Save.svg";
import Image from "next/image";
import { useAuthContext } from "@/contexts/AuthContext";
import { Avatar } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
const Post = ({
  userName,
  profilePicture,
  userId,
  postId,
  images,
  videos,
  caption,
  likes,
  comments,
}: {
  userName: string;
  profilePicture: string;
  userId: string;
  postId: string;
  images: string[];
  videos: string[];
  caption: string;
  likes: string[];
  comments: Comment[];
}) => {
  const { userData } = useAuthContext();
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    setIsFollowing(userData?.following?.includes(userId) || false);
  }, [userData, userId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 w-full ">
      <div className="md:hidden flex justify-between p-4">
        <Link className="flex gap-2 items-center" href={`/${userName}`}>
          <Avatar src={profilePicture} />
          <span className="font-bold text-xl">{userName}</span>
        </Link>
        <div className="flex items-center gap-2">
          {!isFollowing && <button>Follow</button>}
          <Dots className="cursor-pointer" />
        </div>
      </div>

      <Splide className="md:col-span-3">
        {images.map((imageUrl, index) => (
          <SplideSlide
            key={index}
            className="w-full h-full aspect-square relative bg-gray-100 "
          >
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              fill={true}
              priority={true}
              className="object-contain"
              sizes="100%"
            />
          </SplideSlide>
        ))}
      </Splide>

      <div className="hidden md:block md:col-span-2">
        <div className="p-2 flex justify-between">
          <Link className="flex gap-2 items-center" href={`/${userName}`}>
            <Avatar src={profilePicture} />
            <span className="font-bold text-xl">{userName}</span>
          </Link>
          <div className="flex items-center gap-2">
            {!isFollowing && <button>Follow</button>}
            <Dots className="cursor-pointer" />
          </div>
          {/* <Comments /> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
