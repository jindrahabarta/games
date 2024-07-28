import React from "react";

const CircleIcon = ({ size }: any) => {
  if (size === "big") {
    return (
      <div className=" w-16 select-none justify-center flex">
        <div className=" rounded-full h-14 w-14  border-8 border-black"></div>
      </div>
    );
  } else if (size === "small") {
    return (
      <div className=" w-7 select-none justify-center flex">
        <div className=" rounded-full h-7 w-7  border-4 border-black"></div>
      </div>
    );
  }
};

export default CircleIcon;
