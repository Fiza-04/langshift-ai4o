import React from "react";

const IconButton = ({ Icon, onClick }) => {
  return (
    <span
      className="flex items-center space-x-2 cursor-pointer"
      onClick={onClick}
    >
      <Icon size={18} />
    </span>
  );
};

export default IconButton;
