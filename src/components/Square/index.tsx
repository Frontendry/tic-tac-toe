import { forwardRef } from "react";

// Configs
import { SquareProps } from "../../configs/interfaces/interface";
import { playerO, playerX, noWinner } from "../../configs/contants/constant";

// Context
import { useBoardContext } from "../../context/BoardContext";

export type RefType = HTMLButtonElement;

const Square = forwardRef<RefType, SquareProps>((props, ref) => {
  const { squareVal } = props;

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

  const handleClick = (value: number | string) => {
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

  const specialClasses = (value: number | string) => {
    let classes: string;

    if (value === 0 || value === 1) {
      classes = " border-r";
    } else if (value === 3 || value === 4 || value === 6 || value === 7) {
      classes = " border-r border-t";
    } else if (value === 5 || value === 8) {
      classes = " border-t";
    } else {
      classes = "";
    }

    return classes;
  };

  return (
    <button
      className={`aspect-square border-white${specialClasses(squareVal)}`}
      type="button"
      data-square-id={`square-id-${squareVal}`}
      ref={ref}
      onClick={() => {
        if (
          playerOMoves?.includes(squareVal) ||
          playerXMoves?.includes(squareVal) ||
          winner !== noWinner
        ) {
          return;
        }

        handleClick(squareVal);
      }}
    >
      <span className="font-bold text-4xl">
        {playerXMoves !== null && playerXMoves.includes(squareVal) ? (
          <span className="text-rose-700">X</span>
        ) : playerOMoves !== null && playerOMoves.includes(squareVal) ? (
          <span className="text-blue-700">0</span>
        ) : (
          ""
        )}
      </span>
    </button>
  );
});

export default Square;
