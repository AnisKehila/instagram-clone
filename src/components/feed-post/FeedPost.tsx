"use client";
import { fetchUserData } from "@/firebase/fetchUserData";
import { Post, UserData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import FeedPostHeader from "./FeedPostHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Actions from "./Actions";
import { useAuthContext } from "@/contexts/AuthContext";
import isPostLiked from "@/utils/isPostLiked";
import { togglePostLike } from "@/firebase/likePost";
import { useMutation } from "@tanstack/react-query";
import Heart from "@/assets/icons/ActivityFeed-Fiil.svg";
import Link from "next/link";

const FeedPost = ({ postData }: { postData: Post }) => {
  const [postUser, setPostUser] = useState<UserData | null>(null);

  const { userData } = useAuthContext();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  useEffect(() => {
    setIsLiked(isPostLiked({ post: postData, userId: userData?.userId || "" }));
  }, [postData]);
  const { isFetching } = useQuery({
    queryKey: ["fetch-post-user", postData.postId],
    queryFn: () => fetchUserData(postData.userId),
    onSuccess: (data) => setPostUser(data),
    refetchOnWindowFocus: false,
  });
  const { mutate, isLoading } = useMutation({
    mutationKey: ["toggle-like"],
    mutationFn: () =>
      togglePostLike({
        postId: postData.postId,
        userId: userData?.userId || "",
      }),
  });
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleClick = () => {
    if (!isLiked) mutate();
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 800);
  };
  return (
    postUser &&
    !isFetching && (
      <div className="flex flex-col gap-2 w-full max-w-[470px] [&:not(:first-child)]:border-t py-4">
        <FeedPostHeader
          createdAt={postData.createdAt.toDate()}
          profileImage={postUser.profileImage}
          userName={postUser.userName}
        />
        <Splide>
          {postData.images.map((imageUrl, index) => (
            <SplideSlide
              key={index}
              className="w-full h-full aspect-square relative bg-gray-100"
              onDoubleClick={handleDoubleClick}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                fill={true}
                priority={true}
                className="object-contain"
                sizes="100%"
              />
              {showHeart && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  scale-[4] ">
                  <Heart className="fill-slate-200 animate-ping" />
                </div>
              )}
            </SplideSlide>
          ))}
        </Splide>
        <Actions
          post={postData}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          userId={userData?.userId || ""}
          mutate={mutate}
          isLoading={isLoading}
        />
        {postData.likes?.length && postData.likes.length > 0 && (
          <div className="font-medium px-2 sm:px-0">
            {postData.likes.length} likes
          </div>
        )}
        <div className="flex gap-2 px-2 sm:px-0">
          <Link
            href={`/${postUser.userName}`}
            className="font-medium active:opacity-70"
          >
            {postUser.userName}
          </Link>
          <p>{postData.caption}</p>
        </div>
      </div>
    )
  );
};

export default FeedPost;
