import React from "react";
import { FiPaperclip } from "react-icons/fi";

const FileUpload = ({ handleUpload }) => {
  return (
    <label htmlFor="file-upload" className="cursor-pointer pt-[0.15rem]">
      <FiPaperclip size={16} />
      <input
        id="file-upload"
        type="file"
        onChange={handleUpload}
        className="hidden"
      />
    </label>
  );
};

export default FileUpload;
