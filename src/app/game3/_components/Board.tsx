import React from "react";

const Board = ({ children }: any) => {
  return (
    <div className="border-4 border-gray-200 bg-gray-100 p-2 w-96 h-96 grid grid-cols-3 grid-rows-3 gap-2">
      {children}
    </div>
  );
};

export default Board;
