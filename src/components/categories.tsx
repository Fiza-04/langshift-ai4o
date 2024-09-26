import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { LuSchool } from "react-icons/lu";
import { FaRegLightbulb, FaRegHeart, FaPen } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const categories = [
  { icon: BsBriefcase, label: "Business" },
  { icon: LuSchool, label: "Education" },
  { icon: FaRegLightbulb, label: "Creative" },
  { icon: FaRegHeart, label: "Health" },
  { icon: FaPen, label: "Journaling" },
  { icon: FaRegFaceSmileBeam, label: "Communication" },
];

const Categories: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20">
      {categories.map((category) => (
        <a
          href="#"
          key={category.label}
          className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800"
        >
          <category.icon size={40} />
          <p className="text-2xl">{category.label}</p>
        </a>
      ))}
    </div>
  );
};

export default Categories;
