import React, { HTMLProps } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  open,
  setOpen,
  className,
  ...props
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (arg: boolean) => void;
} & React.HTMLProps<HTMLDivElement>) => {
  return createPortal(
    open && (
      <div
        className={
          "fixed left-0 top-0 h-screen w-screen bg-[rgb(0,0,0,.65)] flex justify-center items-center z-40"
        }
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div
            className={
              "bg-white rounded-lg animate-modal-pop z-30" + " " + className
            }
            {...props}
          >
            {children}
          </div>
        </ClickAwayListener>
      </div>
    ),
    document.body
  );
};

export default Modal;
