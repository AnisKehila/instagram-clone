import React from "react";
import More from "@/assets/icons/More.svg";
import Button from "../ui/Button";
import Link from "next/link";
const ProfileButtons = ({ isPersonal }: { isPersonal: boolean }) => {
  return !isPersonal ? (
    <div className="flex items-center gap-2">
      <Button className="font-extrabold px-4 text-sm">Follow</Button>
      <Button className="font-extrabold px-4 text-sm">Message</Button>
      <More className="cursor-pointer" />
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link href="/edit">
        <Button className="font-extrabold px-4 text-sm">Edit profile</Button>
      </Link>
      <Link href="/archive/stories">
        <Button className="font-extrabold px-4 text-sm">View archive</Button>
      </Link>
    </div>
  );
};

export default ProfileButtons;
