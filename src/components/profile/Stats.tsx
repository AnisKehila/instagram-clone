import React from "react";

const Stats = () => {
  return (
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
  );
};

export default Stats;
