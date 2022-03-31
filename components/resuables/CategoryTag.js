import { DownOutlined } from "@ant-design/icons";
import React from "react";

const CategoryTag = ({ children, isActive }) => {
  const active = ["bg-black text-white border-2 border-green-200"];
  const unActive = ["text-black"];
  return (
    <span
      className={`rounded-full flex items-center space-x-2   font-medium text-base p-1 px-4 ${
        isActive ? active.join("") : unActive.join("")
      }`}
    >
      <span>{children}</span>
      <DownOutlined />
    </span>
  );
};

export default CategoryTag;
