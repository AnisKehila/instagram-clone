"use client";
import { UserData } from "@/types";
import React, { useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import { redirect } from "next/navigation";

const Profile = ({ profileData }: { profileData: UserData }) => {
  useEffect(() => {
    if (!profileData) redirect("/not-found");
  }, [profileData]);
  return (
    profileData && (
      <main className="w-[945px] mx-auto max-w-full">
        <ProfileHeader profileData={profileData} />
      </main>
    )
  );
};

export default Profile;
