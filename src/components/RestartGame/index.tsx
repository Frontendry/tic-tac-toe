// Context
import { useBoardContext } from "../../context/BoardContext";

// Constants
import { noWinner, playerX } from "../../configs/contants/constant";

const RestartGame = () => {
  const {
    setCurrentPlayer,
    setPlayerOMoves,
    setPlayerXMoves,
    setWinner,
    setPlayerXScore,
    setPlayerOScore,
    setWinningMoves,
  } = useBoardContext();

  const restartGame = () => {
    setCurrentPlayer !== null && setCurrentPlayer(playerX);
    setPlayerOMoves !== null && setPlayerOMoves([]);
    setPlayerXMoves !== null && setPlayerXMoves([]);
    setWinner !== null && setWinner(noWinner);
    setPlayerXScore !== null && setPlayerXScore(0);
    setPlayerOScore !== null && setPlayerOScore(0);
    setWinningMoves !== null && setWinningMoves([]);
  };

  return (
    <button
      type="button"
      className="text-white text-xs tracking-widest uppercase border-b-2 border-white pb-1 cursor-pointer"
      onClick={() => restartGame()}
    >
      Restart Game
    </button>
  );
};

export default RestartGame;
