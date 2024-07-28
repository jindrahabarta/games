import React, { useState } from "react";
import Question from "./Question";
import Dot from "./Dot";

const QuestionCard = ({ questions, handleEnd }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [end, setEnd] = useState(false);
  const [successGraph, setSuccessGraph] = useState<boolean[]>([]);

  function next() {
    if (questionNum >= 0 && questionNum < 9) {
      setQuestionNum((prev) => prev + 1);
      setIsClicked(false);
    }
    if (questionNum === 8) {
      setEnd(true);
    }
  }

  // function prev() {
  //   if (questionNum > 0 && questionNum <= 9) setQuestionNum((prev) => prev - 1);
  // }

  const compare = (answer: string) => {
    if (!isClicked) {
      if (answer === questions[questionNum].answer) {
        setScore((prev) => prev + 1);
        successGraph && successGraph.length > 0
          ? setSuccessGraph([...successGraph, true])
          : setSuccessGraph([true]);
      } else {
        successGraph && successGraph.length > 0
          ? setSuccessGraph([...successGraph, false])
          : setSuccessGraph([false]);
      }
    }

    setIsClicked(true);
  };

  return (
    <div className=" border border-gray-400 sm:p-10 p-4 rounded-2xl flex flex-col justify-between min-w-full md:min-w-0 md:w-2/3 lg:w-1/3 sm:h-96 ">
      <h1 className=" text-start font-bold">
        {questionNum + 1}: {questions[questionNum].question}
      </h1>
      <p className="w-full text-end">Score: {score}</p>

      <div className="flex flex-col gap-2">
        <Question
          onClick={() => compare("A")}
          background={
            isClicked
              ? questions[questionNum].answer === "A"
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-white"
          }
        >
          <span>A: </span>
          {questions[questionNum].A}
        </Question>

        <Question
          onClick={() => compare("B")}
          background={
            isClicked
              ? questions[questionNum].answer === "B"
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-white"
          }
        >
          <span>B: </span>
          {questions[questionNum].B}
        </Question>
        <Question
          onClick={() => compare("C")}
          background={
            isClicked
              ? questions[questionNum].answer === "C"
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-white"
          }
        >
          <span>C: </span>
          {questions[questionNum].C}
        </Question>
        <Question
          onClick={() => compare("D")}
          background={
            isClicked
              ? questions[questionNum].answer === "D"
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-white"
          }
        >
          <span>D: </span>
          {questions[questionNum].D}
        </Question>
      </div>
      <div className="flex gap-2 justify-end">
        {/* <button onClick={prev} className="p-1">
          Prev
        </button> */}
        {end ? (
          <button onClick={() => handleEnd(score)} className="p-1">
            End
          </button>
        ) : (
          <button onClick={next} className="p-1">
            Next
          </button>
        )}
      </div>
      <div className="w-full flex justify-start gap-2">
        {successGraph.map((item: any, index: number) => (
          <Dot
            key={index}
            color={`${item ? "bg-green-500" : "bg-red-500"}`}
          ></Dot>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
