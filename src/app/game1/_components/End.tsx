import React from "react";

const End = ({ score }: any) => {
  return (
    <div className="w-full h-52 flex flex-col gap-2  items-center justify-between z-50">
      <div>
        <h1 className="text-6xl text-center font-pixelify z-50">
          End of the game!
        </h1>
        <h2 className=" text-3xl text-center font-pixelify hover:text-red-500 z-50">
          Your score is: {score}
        </h2>
      </div>

      <button
        onClick={() => location.reload()}
        className=" text-4xl border border-black border-l-4 border-b-8 p-4 hover:border-l hover:border-b  hover:bg-slate-100 duration-200 "
      >
        Play again
      </button>
    </div>
  );
};

export default End;
