import React from "react";

const FloatingMenu = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute drop-shadow-[0_4px_12px_rgba(0,0,0,.15)] z-10 w-[266px] rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatingMenu;
