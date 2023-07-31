"use client";
import { UserData } from "@/types";
import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { useAuthContext } from "@/contexts/AuthContext";

const Profile = ({ profileData }: { profileData: UserData }) => {
  const { userData } = useAuthContext();
  const [isPersonal, setIsPersonal] = useState(false);

  useEffect(() => {
    if (profileData.userId == userData?.userId) {
      setIsPersonal(true);
    }
  }, [profileData, userData]);
  return (
    profileData && (
      <main className="w-[945px] mx-auto max-w-full">
        <ProfileHeader
          profileData={isPersonal && userData ? userData : profileData}
          isPersonal={isPersonal}
        />
      </main>
    )
  );
};

export default Profile;
