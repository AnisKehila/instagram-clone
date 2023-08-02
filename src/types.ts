import { Timestamp } from "firebase/firestore";
export type UserData = {
  userId: string;
  userName: string;
  fullName: string;
  email: string;
  profileImage: string;
  bio: string;
  followers: string[];
  following: string[];
  posts: string[];
  createdAt: Timestamp;
};
export type Post = {
  postId: string;
  userId: string;
  images: string[];
  videos: string[];
  caption: string;
  likes: string[];
  comments: Comment[];
  createdAt: Timestamp;
};

export type Comment = {
  commentId: string;
  userId: string;
  text: string;
  createdAt: Timestamp;
};

export type Like = {
  postId: string;
  userId: string;
  created_at: Timestamp;
};

export type Activity = {
  user_id: string;
  activity_type: "like" | "comment" | "follow";
  activity_data: string;
  created_at: Timestamp;
};

export type ExplorePosts = {
  postIds: string[];
};
