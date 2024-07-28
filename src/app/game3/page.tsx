"use client";
import React, { useState } from "react";
import CrossIcon from "./icons/CrossIcon";
import CircleIcon from "./icons/CircleIcon";
import Board from "./_components/Board";
import Card from "./_components/Card";

const page = () => {
  const [player, setPlayer] = useState<number>(0);

  const cards = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const change = () => {
    if (player === 0) {
      setPlayer(1);
    } else {
      setPlayer(0);
    }
  };

  return (
    <main className=" flex flex-col gap-2 items-center justify-center h-screen">
      <div className="flex gap-1 items-center absolute top-20 left-5">
        <p>Now playing:</p>
        {player === 0 ? (
          <CrossIcon size="small"></CrossIcon>
        ) : (
          <CircleIcon size="small"></CircleIcon>
        )}
        <p>{player}</p>
      </div>
      <Board>
        {cards.map((item: any, index: number) => (
          <Card key={index} player={player} handleClick={change}></Card>
        ))}
      </Board>
    </main>
  );
};

export default page;
