import { Post } from "@/types";

const isPostLiked: (arg: { post: Post; userId: string }) => boolean = ({
  post,
  userId,
}) => {
  return post.likes?.includes(userId) || false;
};

export default isPostLiked;
