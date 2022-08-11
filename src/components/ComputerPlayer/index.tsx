// React Stuff
import React, { useEffect } from "react";

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

const ComputerPlayer = () => {
  const { playerXMoves, setPlayerOMoves, currentPlayer, refButtonValue } =
    useBoardContext();

  /*  useEffect(() => {
    if (playerXMoves !== null && playerXMoves.length > 0) {
      console.log("computer play");
    }
  }, [playerXMoves]); */

  // Set Computer Player as Player O
  if (currentPlayer === playerO) {
    console.log("computer play");
    // get current player x moves
    //console.log(playerXMoves);

    console.log(refButtonValue);
  }

  return <></>;
};

export default ComputerPlayer;
