import React from "react";
import { Avatar } from "@mui/material";
import ProfileButtons from "./ProfileButtons";
import { UserData } from "@/types";
const ProfileHeader = ({ profileData }: { profileData: UserData }) => {
  return (
    <header className="profile-info mt-8 ">
      <div className="flex items-start gap-[101px] px-[68px]">
        <Avatar
          src={profileData?.profileImage}
          sx={{ width: 150, height: 150 }}
        />
        <div className="flex flex-col ">
          <div className="flex gap-4 items-center">
            <span className="text-[28px]">{profileData.userName}</span>
            <ProfileButtons />
          </div>
          <div className="mt-6 flex gap-[40px]">
            <div className="flex gap-1">
              <span className="font-bold">1.258</span>
              <span>posts</span>
            </div>
            <div className="flex gap-1">
              <span className="font-bold">4M</span>
              <span>followers</span>
            </div>
            <div className="flex gap-1">
              <span className="font-bold">95</span>
              <span>following</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{profileData.fullName}</span>
            <span>{profileData.bio}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
