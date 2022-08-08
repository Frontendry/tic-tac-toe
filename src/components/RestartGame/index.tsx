// Context
import { useBoardContext } from "../../context/BoardContext";

// Constants
import { noWinner, playerX } from "../../configs/contants/constant";

const RestartGame = () => {
  const { setCurrentPlayer, setPlayerOMoves, setPlayerXMoves, setWinner } =
    useBoardContext();

  const restartGame = () => {
    setCurrentPlayer !== null && setCurrentPlayer(playerX);
    setPlayerOMoves !== null && setPlayerOMoves([]);
    setPlayerXMoves !== null && setPlayerXMoves([]);
    setWinner !== null && setWinner(noWinner);
  };

  return (
    <button
      type="button"
      className="text-white text-xs tracking-widest uppercase border-b-2 border-white pb-1 mt-12 cursor-pointer"
      onClick={() => restartGame()}
    >
      Restart Game
    </button>
  );
};

export default RestartGame;
