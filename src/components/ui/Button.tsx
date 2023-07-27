import React, { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={
        "bg-[#EFEFEF] rounded-lg hover:bg-[#DBDBDB] active:opacity-60 h-9 text[#000000] " +
          className || ""
      }
    >
      {children}
    </button>
  );
};

export default Button;
