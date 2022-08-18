import { createRef, useRef, RefObject } from "react";

// Context
import { BoardContextProvider } from "../../context/BoardContext";

// Utils
import { squareOptions } from "../../configs/utils/utils";

// Components
import RestartGame from "../RestartGame";
import ScoreBoard from "../ScoreBoard";
import Square from "../Square";
//import ComputerPlayer from "../ComputerPlayer";
import ClearBoard from "../ClearBoard";
import AnimateWinner from "../AnimateWinner";

const Board = () => {
  const squareRefs = useRef<(RefObject<HTMLButtonElement> | undefined)[]>([]);

  squareRefs.current = squareOptions.map(
    (_, i) => squareRefs.current[i] ?? createRef()
  );

  return (
    <>
      <BoardContextProvider>
        <ScoreBoard />

        <div className="grid grid-cols-3 w-1/4">
          {squareOptions.map((squareVal, index) => (
            <Square
              key={`square-${squareVal}`}
              squareVal={squareVal}
              ref={squareRefs.current[index]}
            />
          ))}
        </div>

        {/* 
        // Feature coming soon...
        <ComputerPlayer squares={squareRefs.current} /> */}

        <AnimateWinner squares={squareRefs.current} />

        <div className="flex items-center justify-center text-center mt-12">
          <ClearBoard />
          <span className="mx-5 text-white">or</span>
          <RestartGame />
        </div>
      </BoardContextProvider>
    </>
  );
};

export default Board;
