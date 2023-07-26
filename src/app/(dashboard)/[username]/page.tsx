import Profile from "@/components/Profile";
import { fetchUserDataByUserName } from "@/firebase/fetchUserData";
import { UserData } from "@/types";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const data = (await fetchUserDataByUserName(params.username)) as UserData;
  return {
    title: `${data.fullName} (@${data.userName}) • Instagram photos and videos`,
  };
}
const Page = async ({ params }: { params: any }) => {
  const data = (await fetchUserDataByUserName(params.username)) as UserData;
  return <Profile profileData={data} />;
};

export default Page;
