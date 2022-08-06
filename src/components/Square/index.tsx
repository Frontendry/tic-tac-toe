// Configs
import { SquareProps } from "../../configs/interfaces/interface";
import { playerO, playerX } from "../../configs/contants/constant";

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
        if (playerOMoves?.includes(value) || playerXMoves?.includes(value)) {
          return;
        }

        handleClick(value);
      }}
    ></button>
  );
};

export default Square;
