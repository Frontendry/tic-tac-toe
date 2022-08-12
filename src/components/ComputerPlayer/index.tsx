// React Stuff
import React, { RefObject, useEffect } from "react";

// Context
import { useBoardContext } from "../../context/BoardContext";

// Constants
import { playerO } from "../../configs/contants/constant";

// Square Options
import { squareOptions } from "../../configs/utils/utils";

// Winning Combos
import {
  rowWinningCombos,
  columnWinningCombos,
  diagonalWinningCombos,
} from "../../configs/utils/utils";

interface Props {
  squares: (RefObject<HTMLButtonElement> | undefined)[];
}

const ComputerPlayer = ({ squares }: Props) => {
  const { playerXMoves, setPlayerOMoves, currentPlayer, refButtonValue } =
    useBoardContext();

  useEffect(() => {
    if (playerXMoves !== null && playerXMoves.length > 0) {
      //console.log("computer play");

      /* console.log(
        typeof squares !== "undefined" &&
          typeof squares[1] !== "undefined" &&
          squares[1] !== null
          ? squares[1].current
          : ""
      ); */

      if (typeof squares[1] !== "undefined") {
        squares[1].current?.click();
      }

      //console.log(typeof squares[1] !== "undefined" && squares[1].current);

      /* if (squares !== null) {
       
      } */
    }
  }, [playerXMoves, squares]);

  // Set Computer Player as Player O
  if (currentPlayer === playerO) {
    //console.log("computer play");
    // get current player x moves
    //console.log(playerXMoves);
    //console.log(refButtonValue);
  }

  return <></>;
};

export default ComputerPlayer;
