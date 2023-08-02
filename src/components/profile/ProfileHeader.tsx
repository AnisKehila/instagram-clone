"use client";
import React, { useEffect, useState } from "react";
import { Avatar, CircularProgress } from "@mui/material";
import ProfileButtons from "./ProfileButtons";
import { UserData } from "@/types";
import Stats from "./Stats";
import Bio from "./Bio";
import ProfilePicModal from "../modals/profile-photo/ProfilePicModal";
const ProfileHeader = ({
  profileData,
  isPersonal,
}: {
  profileData: UserData;
  isPersonal: boolean;
}) => {
  const [picModal, setPicModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <>
      <header className="profile-info mt-8 ">
        <div className="flex items-start gap-[101px] px-[68px]">
          <div className={`relative ${imageLoading && "opacity-60"}`}>
            <Avatar
              src={profileData.profileImage}
              sx={{ width: 150, height: 150 }}
              className="cursor-pointer"
              onClick={() => isPersonal && setPicModal(true)}
            />
            {imageLoading && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircularProgress
                  size={40}
                  className="text-white"
                  color="inherit"
                />
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-4 items-center">
              <span className="text-[28px]">{profileData.userName}</span>
              <ProfileButtons isPersonal={isPersonal} />
            </div>
            <Stats userId={profileData.userId} />
            <Bio bio={profileData.bio} fullName={profileData.fullName} />
          </div>
        </div>
      </header>
      <ProfilePicModal
        profileImage={profileData.profileImage}
        open={picModal}
        setOpen={setPicModal}
        setImageLoading={setImageLoading}
      />
    </>
  );
};

export default ProfileHeader;
