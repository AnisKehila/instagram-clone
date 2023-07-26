"use client";
import { UserData } from "@/types";
import React from "react";
import { Avatar } from "@mui/material";

const Profile = ({ profileData }: { profileData: UserData }) => {
  return (
    <main className="w-[945px] mx-auto max-w-full">
      <header className="profile-info mt-8 ">
        <div className="flex px-[68px]">
          <Avatar
            src={profileData?.profileImage}
            sx={{ width: 150, height: 150 }}
          />
        </div>
      </header>
    </main>
  );
};

export default Profile;
