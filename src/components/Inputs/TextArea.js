import React from "react";

const TextArea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      rows={7}
      cols={35}
      id={id}
      className="py-2 px-4 border-none focus:outline-none block w-full border-transparent rounded-t-[10px] dark:bg-neutral-900 dark:border-transparent dark:text-neutral-200"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
