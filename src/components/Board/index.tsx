import { createRef, useRef, useEffect, RefObject } from "react";

// Context
import {
  BoardContextProvider,
  useBoardContext,
} from "../../context/BoardContext";

// Utils
import { squareOptions } from "../../configs/utils/utils";

// Components
import RestartGame from "../RestartGame";
import ScoreBoard from "../ScoreBoard";
import Square from "../Square";
import ComputerPlayer from "../ComputerPlayer";

const Board = () => {
  const { refButtonValue, setRefButtonValue } = useBoardContext();

  const squareRefs = useRef<(RefObject<HTMLButtonElement> | undefined)[]>([]);

  /*  useEffect(() => {
 

    squareRefs.current = squareOptions.map(
      (_, i) => squareRefs.current[i] ?? createRef()
    );

    setRefButtonValue && setRefButtonValue(squareRefs.current);
  }, [squareRefs, refButtonValue, setRefButtonValue]); */

  squareRefs.current = squareOptions.map(
    (_, i) => squareRefs.current[i] ?? createRef()
  );

  //setRefButtonValue && setRefButtonValue(squareRefs.current);

  /*   setRefButtonValue && setRefButtonValue(squareRefs.current); */

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
              /* ref={refButtonValue && refButtonValue[index]} */
            />
          ))}
        </div>

        <ComputerPlayer squares={squareRefs.current} />

        <RestartGame />
      </BoardContextProvider>
    </>
  );
};

export default Board;
