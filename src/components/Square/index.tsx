// Configs
import { SquareProps } from "../../configs/interfaces/interface";
import { playerO, playerX, noWinner } from "../../configs/contants/constant";

// Context
import { useBoardContext } from "../../context/BoardContext";

const Square = ({ specialClasses, value }: SquareProps) => {
  // BoardContext Data
  const {
    playerXMoves,
    setPlayerXMoves,
    playerOMoves,
    setPlayerOMoves,
    currentPlayer,
    setCurrentPlayer,
    winner,
  } = useBoardContext();

  const handleClick = (value: number) => {
    if (currentPlayer === playerX) {
      if (
        setPlayerXMoves !== null &&
        playerXMoves !== null &&
        setCurrentPlayer !== null
      ) {
        setPlayerXMoves([...playerXMoves, value]);
        setCurrentPlayer(playerO);
      }
    } else {
      if (
        setPlayerOMoves !== null &&
        playerOMoves !== null &&
        setCurrentPlayer !== null
      ) {
        setPlayerOMoves([...playerOMoves, value]);
        setCurrentPlayer(playerX);
      }
    }
  };

  return (
    <button
      className={`aspect-square border-white${
        specialClasses ? ` ${specialClasses}` : ""
      }`}
      type="button"
      onClick={() => {
        if (
          playerOMoves?.includes(value) ||
          playerXMoves?.includes(value) ||
          winner !== noWinner
        ) {
          return;
        }

        handleClick(value);
      }}
    >
      <span className="font-bold text-4xl">
        {playerXMoves !== null && playerXMoves.includes(value) ? (
          <span className="text-rose-700">X</span>
        ) : playerOMoves !== null && playerOMoves.includes(value) ? (
          <span className="text-blue-700">0</span>
        ) : (
          ""
        )}
      </span>
    </button>
  );
};

export default Square;
