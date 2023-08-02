"use client";
import { fetchPost } from "@/firebase/fetchUserData";
import { Post, UserData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
const Posts = ({
  profileData,
  isPersonal,
}: {
  profileData: UserData;
  isPersonal: boolean;
}) => {
  const [posts, setPosts] = useState<Post[]>([{} as Post]);
  const { isFetching } = useQuery({
    queryKey: ["fetch-posts", profileData.userId],
    queryFn: async () => {
      // Use Promise.all to fetch all posts concurrently
      const fetchedPosts = await Promise.all(
        profileData.posts.map(async (post) => {
          const fetchedPost = await fetchPost({ postId: post });
          return fetchedPost;
        })
      );

      return fetchedPosts;
    },
    onSuccess: (data) => {
      setPosts(data);
    },
    refetchOnWindowFocus: false,
  });

  return (
    !isFetching && (
      <div>
        <h1>posts</h1>
        {!isFetching &&
          posts.length > 0 &&
          posts.map((post) =>
            post.images?.map((image, i) => (
              <Image
                src={image}
                alt={post.caption}
                key={i}
                width={400}
                height={400}
              />
            ))
          )}
      </div>
    )
  );
};

export default Posts;
