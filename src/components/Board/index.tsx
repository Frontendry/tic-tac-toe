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
  return (
    <>
      <BoardContextProvider>
        <ScoreBoard />

        <div className="grid grid-cols-3 w-1/4">
          {squareOptions.map((squareVal) => (
            <Square key={`square-${squareVal}`} value={squareVal} />
          ))}
        </div>

        <ComputerPlayer />

        <RestartGame />
      </BoardContextProvider>
    </>
  );
};

export default Board;
