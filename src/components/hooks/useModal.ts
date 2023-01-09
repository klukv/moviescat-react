import React from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    toggle,
  };
};

export default useModal;
