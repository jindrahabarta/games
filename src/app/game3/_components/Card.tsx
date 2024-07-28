import React, { useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import CircleIcon from "../icons/CircleIcon";

const Card = ({ player, handleClick }: any) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      onClick={handleClick}
      className="border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer hover:bg-gray-100 duration-150  "
    >
      {clicked &&
        (player === 0 ? (
          <CrossIcon size="big"></CrossIcon>
        ) : (
          <CircleIcon size="big"></CircleIcon>
        ))}
    </div>
  );
};

export default Card;
