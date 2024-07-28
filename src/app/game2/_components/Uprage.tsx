import React from "react";

const Uprage = ({ image, level, onClick, cpx, nmr }: any) => {
  return (
    <li
      onClick={onClick}
      className=" select-none flex gap-4 w-fit text-amber-950 bg-orange-300 p-3 rounded-lg items-center border-amber-950 border-b-2 border-l-2 shadow-sm shadow-black hover:cursor-pointer hover:border-none transition-all"
    >
      <div className="bg-orange-200 rounded-lg p-2 justify-between">
        <img className="w-10" src={image} alt="grandma1" />
      </div>

      <p>Babicka level {level}</p>
      <p>
        +{nmr} {cpx}
      </p>
    </li>
  );
};

export default Uprage;
