import { fetchPost, fetchUserData } from "@/firebase/fetchUserData";
import React, { Suspense } from "react";
import { Metadata } from "next";
import Post from "@/components/Post";

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const data = await fetchPost({ postId: params.id });
//   const postUser = await fetchUserData(data.userId);
//   return {
//     title: data
//       ? `${data?.caption || postUser?.fullName} | Instagram`
//       : "Instagram",
//   };
// }

// const page = async ({ params }: { params: { id: string } }) => {
//   const postData = await fetchPost({ postId: params.id });
//   const postUser = await fetchUserData(postData.userId);
//   return (
//     <main className="max-w-4xl w-full px-3 h-screen flex justify-center items-center mx-auto overflow-x-hidden">
//       <div className="border">
//         <Post
//           userId={postUser.userId}
//           userName={postUser.userName}
//           profilePicture={postUser.profileImage}
//           caption={postData.caption}
//           postId={postData.postId}
//           images={postData.images}
//           videos={postData.videos}
//           likes={postData.likes}
//           comments={postData.comments}
//         />
//       </div>
//     </main>
//   );
// };

const page = () => {
  return <div>page</div>;
};

export default page;
