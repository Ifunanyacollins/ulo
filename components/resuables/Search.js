import { Input } from "antd";
import React, { useState } from "react";
import CategoryTag from "./CategoryTag";

function Search(props) {
  const [isActive, setIsActive] = useState("1");
  return (
    <div className="border flex overflow-hidden h-14 ">
      <Input style={{ borderRadius: "5px" }} className=" w-1/2" size="large" />
    </div>
  );
}

export default Search;
