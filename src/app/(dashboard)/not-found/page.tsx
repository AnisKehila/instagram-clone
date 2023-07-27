import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10 text-center mx-auto mt-8 ">
      <span className="font-extrabold text-2xl">
        Sorry, this page {"isn't"} available.
      </span>
      <span>
        The link you followed may be broken, or the page may have been removed.{" "}
        <Link href="/feed" className="text-[#00376B]">
          Go back to Instagram.
        </Link>
      </span>
    </div>
  );
};

export default page;
