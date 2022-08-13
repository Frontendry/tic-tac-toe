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

// Total Winning Combos
const winningCombos = rowWinningCombos.concat(
  columnWinningCombos,
  diagonalWinningCombos
);

const ComputerPlayer = ({ squares }: Props) => {
  const { playerXMoves, playerOMoves, currentPlayer } = useBoardContext();

  useEffect(() => {
    if (currentPlayer === playerO) {
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
      // Random Remainder Move
      let randomItemFromRemaider =
        remainderSquares[Math.floor(Math.random() * remainderSquares.length)];

      // Block Player Advances
      const blockingSquareItem = (
        playerMoves: (string | number)[] | null,
        winningCombos: (string | number)[][] | null,
        randomItemInstead: string | number
      ) => {
        // Last 2 Player X Moves
        //const checkerItems = playerMoves?.slice(-2);
        const checkerItems = [3, 4];

        if (typeof checkerItems === "undefined") {
          return;
        }

        const filteredEl =
          winningCombos &&
          winningCombos.filter((winningCombo) => {
            let slicedWinningComboArr = winningCombo.slice(0, 2);

            return (
              slicedWinningComboArr[0] === checkerItems[0] &&
              slicedWinningComboArr[1] === checkerItems[1]
            );
          });

        const blockingNumber = filteredEl && filteredEl[0][2];

        return filteredEl?.length === 0 ? randomItemInstead : blockingNumber;
      };

      blockingSquareItem(totalMoves, winningCombos, randomItemFromRemaider);

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
