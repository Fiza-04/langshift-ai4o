import React from "react";
import { IoLink } from "react-icons/io5";

const PasteUrl = ({ handlePasteUrl }) => {
  return (
    <label htmlFor="url-input" className="cursor-pointer pt-[0.05rem]">
      <IoLink size={19} />
      <input
        type="text"
        id="url-input"
        onChange={handlePasteUrl}
        className="hidden"
      />
    </label>
  );
};

export default PasteUrl;
