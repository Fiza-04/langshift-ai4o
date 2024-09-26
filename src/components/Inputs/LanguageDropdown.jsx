import React from "react";
import { IoLanguageOutline } from "react-icons/io5";

const LanguageDropdown = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => {
  return (
    <span className="rounded-full space-x-2 pl-2 cursor-pointer bg-neutral-950 flex flex-row items-center">
      <IoLanguageOutline size={20} />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="cursor-pointer space-x-1 pl-2 py-1
   bg-neutral-900 border border-neutral-950 rounded-[5px] flex items-center flex-row"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
};

export default LanguageDropdown;
