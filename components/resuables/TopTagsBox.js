import React from "react";

function TopTagsBox(props) {
  return (
    <div className="flex my-3">
      <span className="bg-gray-100 p-1 px-2 rounded text-black cursor-pointer">
        <strong className="text-primary text-base mx-1">#</strong>Crypto
      </span>
    </div>
  );
}

export default TopTagsBox;
