// Context
import { BoardContextProvider } from "../../context/BoardContext";

// Components
import RestartGame from "../RestartGame";
import ScoreBoard from "../ScoreBoard";
import Square from "../Square";

const Board = () => {
  return (
    <>
      <BoardContextProvider>
        <ScoreBoard />

        <div className="grid grid-cols-3 w-1/4">
          <Square specialClasses="border-r" value={0} />
          <Square specialClasses="border-r" value={1} />
          <Square value={2} />
          <Square specialClasses="border-r border-t" value={3} />
          <Square specialClasses="border-r border-t" value={4} />
          <Square specialClasses="border-t" value={5} />
          <Square specialClasses="border-r border-t" value={6} />
          <Square specialClasses="border-r border-t" value={7} />
          <Square specialClasses="border-t" value={8} />
        </div>

        <RestartGame />
      </BoardContextProvider>
    </>
  );
};

export default Board;
