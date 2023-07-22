import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex items-center flex-col justify-between min-h-screen">
      <div className="flex-1 flex items-center">
        <Image
          src="/logoTransparent.png"
          alt="Instagram"
          width={80}
          height={80}
          priority={Image}
        />
      </div>
      <Image
        src="/fromMeta.png"
        alt="Loading"
        width={72}
        height={37}
        className="mb-12"
      />
    </div>
  );
};

export default Loading;
