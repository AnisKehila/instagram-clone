import React from "react";
import Modal from "../ui/Modal";

const SendMessageModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      Test
    </Modal>
  );
};

export default SendMessageModal;
