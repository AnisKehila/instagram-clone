"use client";
import { fetchUserData } from "@/firebase/fetchUserData";
import { Post, UserData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import FeedPostHeader from "./FeedPostHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const FeedPost = ({ postData }: { postData: Post }) => {
  const [postUser, setPostUser] = useState<UserData | null>(null);
  const { isFetching } = useQuery({
    queryKey: ["fetch-post-user", postData.postId],
    queryFn: () => fetchUserData(postData.userId),
    onSuccess: (data) => setPostUser(data),
    refetchOnWindowFocus: false,
  });
  return (
    postUser &&
    !isFetching && (
      <div className="flex flex-col gap-2 w-full max-w-[470px] [&:not(:first-child)]:border-t py-4">
        <FeedPostHeader
          createdAt={postData.createdAt.toDate()}
          profileImage={postUser.profileImage}
          userName={postUser.userName}
        />
        <Splide className="">
          {postData.images.map((imageUrl, index) => (
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
      </div>
    )
  );
};

export default FeedPost;
