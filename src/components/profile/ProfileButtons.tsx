import React from "react";
import More from "@/assets/icons/More.svg";
import Button from "../ui/Button";
const ProfileButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="font-extrabold px-4 text-sm">Follow</Button>
      <Button className="font-extrabold px-4 text-sm">Message</Button>
      <More className="cursor-pointer" />
    </div>
  );
};

export default ProfileButtons;
