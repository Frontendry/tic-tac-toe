import { createRef, useRef } from "react";

// Context
import { BoardContextProvider } from "../../context/BoardContext";

// Utils
import { squareOptions } from "../../configs/utils/utils";

// Components
import RestartGame from "../RestartGame";
import ScoreBoard from "../ScoreBoard";
import Square from "../Square";
import ComputerPlayer from "../ComputerPlayer";

const Board = () => {
  const squareRefs = useRef([]);
  squareRefs.current = squareOptions.map(
    (_, i) => squareRefs.current[i] ?? createRef()
  );

  /*  const addToRefs: (el : never ) => void = (el) => {
    if (el && !squareRefs.current.includes(el)) {
      squareRefs.current.push(el);
    }
  }; */

  return (
    <>
      <BoardContextProvider>
        <ScoreBoard />

        <div className="grid grid-cols-3 w-1/4">
          {squareOptions.map((squareVal, index) => (
            <Square
              key={`square-${squareVal}`}
              value={squareVal}
              ref={squareRefs.current[index]}
            />
          ))}
        </div>

        <ComputerPlayer />

        <RestartGame />
      </BoardContextProvider>
    </>
  );
};

export default Board;
