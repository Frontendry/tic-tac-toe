// React Stuff
import React, { RefObject, useEffect } from "react";

// Context
import { useBoardContext } from "../../context/BoardContext";

// Constants
import { playerO } from "../../configs/contants/constant";

// Square Options
import { squareOptions } from "../../configs/utils/utils";

// Square Collection Interface
import { SquaresCollections } from "../../configs/interfaces/interface";

// Winning Combos
import {
  rowWinningCombos,
  columnWinningCombos,
  diagonalWinningCombos,
} from "../../configs/utils/utils";

// Total Winning Combos
const winningCombos = rowWinningCombos.concat(
  columnWinningCombos,
  diagonalWinningCombos
);

const ComputerPlayer = ({ squares }: SquaresCollections) => {
  const { playerXMoves, playerOMoves, currentPlayer } = useBoardContext();

  useEffect(() => {
    const computerPlayerDelay = setTimeout(() => {
      if (currentPlayer === playerO) {
        const currentPlayerXMoves = playerXMoves;
        const currentPlayerComputerMoves = playerOMoves;

        // Get Combined Moves from PlayerX and PlayerO. Adding PlayerX Moves at the end to use it when configuring blocking strategy at blockingSquareItem() below.
        const totalMoves =
          currentPlayerXMoves &&
          currentPlayerComputerMoves &&
          currentPlayerComputerMoves?.length > 0
            ? currentPlayerComputerMoves?.concat(currentPlayerXMoves)
            : currentPlayerXMoves;

        // console.log(totalMoves);

        // Remainder Moves from Combined Moves
        const remainderSquares = squareOptions.filter(
          (squareOption) => !totalMoves?.includes(squareOption)
        );
        // Random Remainder Move
        const randomItemFromRemaider =
          remainderSquares[Math.floor(Math.random() * remainderSquares.length)];

        // Block Player Advances
        const blockingSquareItem = (
          playerMoves: (string | number)[] | null,
          winningCombos: (string | number)[][] | null,
          remainderSquares: (number | string)[],
          randomItemInstead: string | number
        ) => {
          // Get Last 2 Player X Moves from totalMoves
          const checkerItems = playerMoves?.slice(-2);

          // If CheckerItems is undefined stop there --- No need but Typescript complains if the check is not there
          if (typeof checkerItems === "undefined") {
            return;
          }

          // Filter out the winning combination based on the checker items (last PlayerX moves)
          const filteredEl =
            winningCombos &&
            winningCombos.filter((winningCombo) => {
              let slicedWinningComboArr = winningCombo.slice(0, 2);

              return (
                slicedWinningComboArr[0] === checkerItems[0] &&
                slicedWinningComboArr[1] === checkerItems[1]
              );
            });

          // Get the last winning combination to block playerX
          const blockingNumber = filteredEl && filteredEl[0][2];

          // Check if blocking number is actually available in the remainder squares
          const availableBlockingSquare =
            blockingNumber && remainderSquares.includes(blockingNumber)
              ? blockingNumber
              : randomItemInstead;

          return filteredEl?.length === 0
            ? randomItemInstead
            : availableBlockingSquare;
        };

        // Player X has to have more than 1 item so that blocking strategy is enabled.
        /*  const squareToBeClicked: number | string | undefined =
        playerXMoves && playerXMoves?.length > 1
          ? blockingSquareItem(
              totalMoves,
              winningCombos,
              remainderSquares,
              randomItemFromRemaider
            )
          : randomItemFromRemaider; */

        const squareToBeClicked: number | string | undefined =
          randomItemFromRemaider;

        // Trigger Square to be clicked
        if (
          typeof squareToBeClicked !== "undefined" &&
          typeof squareToBeClicked !== "string"
        ) {
          squares[squareToBeClicked]?.current?.click();
        }
      }
    }, 500);

    return () => clearTimeout(computerPlayerDelay);
  }, [currentPlayer, playerXMoves, playerOMoves, squares]);

  return <></>;
};

export default ComputerPlayer;
