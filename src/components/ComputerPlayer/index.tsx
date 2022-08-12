// React Stuff
import React, { Ref, useEffect } from "react";

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
  squares: (Ref<HTMLButtonElement> | undefined)[];
}

const ComputerPlayer = ({ squares }: Props) => {
  const { playerXMoves, setPlayerOMoves, currentPlayer, refButtonValue } =
    useBoardContext();

  console.log(squares);

  /*  useEffect(() => {
    if (playerXMoves !== null && playerXMoves.length > 0) {
      console.log("computer play");
    }
  }, [playerXMoves]); */

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
