import React from "react";

const Question = ({ children, onClick, background }: any) => {
  return (
    <div className="h-10">
      <div
        onClick={onClick}
        className={` border-black border-l-2 border-b-4 border-t border-r hover:border-l hover:border-b px-2 py-1 ${background}  hover:cursor-pointer duration-200`}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Question;
