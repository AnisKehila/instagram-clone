"use client";
import { Comment } from "@/types";
import React, { useEffect, useState } from "react";
import Dots from "@/assets/icons/More.svg";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuthContext } from "@/contexts/AuthContext";
import { Avatar } from "@mui/material";
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { userData } = useAuthContext();
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    setIsFollowing(userData?.following?.includes(userId) || false);
  }, [userData, userId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:hidden flex justify-between p-4 w-full">
        <Link className="flex gap-2 items-center" href={`/${userName}`}>
          <Avatar src={profilePicture} />
          <span className="font-bold text-xl">{userName}</span>
        </Link>
        <div className="flex items-center gap-2">
          {!isFollowing && <button>Follow</button>}
          <Dots className="cursor-pointer" />
        </div>
      </div>
      <Slider {...settings} className="md:col-span-3 max-w-full">
        {images.map((imageUrl, index) => (
          <figure key={index} className="w-full h-full aspect-square relative">
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              fill={true}
              priority={true}
            />
          </figure>
        ))}
      </Slider>

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
