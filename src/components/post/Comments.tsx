import { Comment as CommentType } from "@/types";
import React from "react";
import Comment from "./Comment";
const Comments = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div className=" max-h-[480px] py-4 border-y mt-4 overflow-y-auto text-ellipsis ">
      {comments.map((comment, i) => (
        <Comment
          key={comment.commentId}
          comment={comment.comment}
          userName={comment.userName}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
};

export default Comments;
