import React from "react";

const CrossIcon = ({ size }: any) => {
  if (size === "big") {
    return (
      <div className=" w-16 select-none">
        <div className="absolute bg-black h-2 w-16 rotate-45"></div>
        <div className="absolute bg-black h-2 w-16 -rotate-45"></div>
      </div>
    );
  } else if (size === "small") {
    return (
      <div className=" w-8 select-none">
        <div className="absolute bg-black h-1 w-8 rotate-45"></div>
        <div className="absolute bg-black h-1 w-8 -rotate-45"></div>
      </div>
    );
  }
};

export default CrossIcon;
