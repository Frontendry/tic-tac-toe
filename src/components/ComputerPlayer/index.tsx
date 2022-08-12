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
  const { playerXMoves, playerOMoves, currentPlayer } = useBoardContext();

  useEffect(() => {
    if (currentPlayer === playerO) {
      console.log("computer play");

      let currentPlayerXMoves = playerXMoves;
      let currentPlayerComputerMoves = playerOMoves;

      // console.log(currentPlayerXMoves);
      // console.log(currentPlayerComputerMoves);

      // Get Combined Moves from PlayerX and PlayerO. Adding PlayerX Moves at the end to use it when configuring blocking strategy at blockingSquareItem() below.
      let totalMoves =
        currentPlayerXMoves &&
        currentPlayerComputerMoves &&
        currentPlayerComputerMoves?.length > 0
          ? currentPlayerComputerMoves?.concat(currentPlayerXMoves)
          : currentPlayerXMoves;

      // console.log(totalMoves);

      // Remainder Moves from Combined Moves
      let remainderSquares = squareOptions.filter(
        (squareOption) => !totalMoves?.includes(squareOption)
      );

      //  console.log(remainderSquares);

      // Random Remainder Move
      let randomItemFromRemaider =
        remainderSquares[Math.floor(Math.random() * remainderSquares.length)];

      // Block Player Advances
      const blockingSquareItem = (playerXMoves: (string | number)[] | null) => {
        let squareItem;

        const winningCombos = rowWinningCombos.concat(
          columnWinningCombos,
          diagonalWinningCombos
        );

        console.log(winningCombos);

        const checkerItems = [1, 2];
        const checkerItemsString = checkerItems.join();

        //console.log(checkerItemsString);

        winningCombos.filter((winningCombo) => {
          console.log();
          let slicedArr = winningCombo.slice(0, 2) === checkerItems;

          console.log(slicedArr);
          return winningCombo;
        });
      };

      blockingSquareItem(playerXMoves);

      // Player X has to have more than 1 item so that blocking strategy is enabled.
      let squareToBeClicked: number = randomItemFromRemaider;

      // Trigger Square to be clicked
      if (typeof squares[squareToBeClicked] !== "undefined") {
        squares[squareToBeClicked]?.current?.click();
      }
    }
  }, [currentPlayer, playerXMoves, playerOMoves, squares]);

  // Set Computer Player as Player O

  return <></>;
};

export default ComputerPlayer;
