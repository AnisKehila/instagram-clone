"use client";
import { userStats } from "@/firebase/fetchUserData";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
const Stats = ({ userId }: { userId: string }) => {
  const [stats, setStats] = useState({
    posts: 0,
    followers: 0,
    following: 0,
  });
  const { isFetching } = useQuery({
    queryKey: ["fetch-stats"],
    queryFn: () => userStats({ userId: userId }),
    onSuccess: (data) => setStats(data),
    refetchOnWindowFocus: false,
  });
  return (
    <div className="mt-5 flex gap-[40px]">
      <div className="flex gap-1 items-center">
        <span className="font-bold">
          {!isFetching ? (
            stats.posts
          ) : (
            <CircularProgress color="inherit" size={10} />
          )}
        </span>
        <span>posts</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">
          {!isFetching ? (
            stats.followers
          ) : (
            <CircularProgress color="inherit" size={10} />
          )}
        </span>
        <span>followers</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="font-bold">
          {!isFetching ? (
            stats.following
          ) : (
            <CircularProgress color="inherit" size={10} />
          )}
        </span>
        <span>following</span>
      </div>
    </div>
  );
};

export default Stats;
