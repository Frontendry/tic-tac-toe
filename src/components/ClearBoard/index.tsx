// Context
import { useBoardContext } from "../../context/BoardContext";

// Constants
import { noWinner, playerX } from "../../configs/contants/constant";

const ClearBoard = () => {
  const {
    setCurrentPlayer,
    setPlayerOMoves,
    setPlayerXMoves,
    setWinner,
    setWinningMoves,
  } = useBoardContext();

  const clear = () => {
    setCurrentPlayer !== null && setCurrentPlayer(playerX);
    setPlayerOMoves !== null && setPlayerOMoves([]);
    setPlayerXMoves !== null && setPlayerXMoves([]);
    setWinner !== null && setWinner(noWinner);
    setWinningMoves !== null && setWinningMoves([]);
  };

  return (
    <button
      type="button"
      className="text-white text-xs tracking-widest uppercase border-b-2 border-white pb-1 cursor-pointer"
      onClick={() => clear()}
    >
      Clear Board
    </button>
  );
};

export default ClearBoard;
