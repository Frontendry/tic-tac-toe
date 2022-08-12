// React
import { useEffect } from "react";

// Constants
import { playerO, playerX, noWinner } from "../../configs/contants/constant";

// Context
import { useBoardContext } from "../../context/BoardContext";

// Winning Combos
import {
  rowWinningCombos,
  columnWinningCombos,
  diagonalWinningCombos,
} from "../../configs/utils/utils";

// Components
import PlayerScore from "../PlayerScore";

const ScoreBoard = () => {
  const { currentPlayer, winner, setWinner, playerOMoves, playerXMoves } =
    useBoardContext();

  useEffect(() => {
    const directionWinner = (
      playerXValues: (number | string)[],
      playerOValues: (number | string)[],
      setwinner: React.Dispatch<React.SetStateAction<string>> | null,
      playerX: string,
      playerO: string,
      winningCombinations: number[][]
    ) => {
      const directionValueChecker = (
        first: number | string,
        middle: number | string,
        last: number | string,
        playerValues: (number | string)[],
        player: string
      ) => {
        if (
          playerValues.includes(first) &&
          playerValues.includes(middle) &&
          playerValues.includes(last)
        ) {
          return setwinner !== null && setwinner(player);
        }
      };

      for (let i = 0; i < winningCombinations.length; i++) {
        const direction = winningCombinations[i];

        // Player X Direction Values Checker
        directionValueChecker(
          direction[0],
          direction[1],
          direction[2],
          playerXValues,
          playerX
        );

        // Player O Direction Values Checker
        directionValueChecker(
          direction[0],
          direction[1],
          direction[2],
          playerOValues,
          playerO
        );
      }
    };

    const determineWinner = (
      playerXMoves: (number | string)[],
      playerOMoves: (number | string)[]
    ) => {
      if (winner === noWinner) {
        // Check Row Winner
        directionWinner(
          playerXMoves,
          playerOMoves,
          setWinner,
          playerX,
          playerO,
          rowWinningCombos
        );

        // Check Column Winner
        directionWinner(
          playerXMoves,
          playerOMoves,
          setWinner,
          playerX,
          playerO,
          columnWinningCombos
        );

        // Check Diagonal Winner
        directionWinner(
          playerXMoves,
          playerOMoves,
          setWinner,
          playerX,
          playerO,
          diagonalWinningCombos
        );
      }
    };

    if (playerXMoves !== null && playerOMoves !== null) {
      determineWinner(playerXMoves, playerOMoves);
    }
  }, [playerXMoves, playerOMoves, winner, setWinner]);

  const renderGameStatus = (
    winner: string | null,
    currentPlayer: string | null
  ) => {
    let statusValue;

    if (winner === noWinner) {
      statusValue = `${currentPlayer} turn`;
    } else {
      statusValue = `${winner} Winner !`;
    }

    return statusValue;
  };

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-x-20 mb-4">
        <PlayerScore playerName={playerX} score={0} />
        <PlayerScore playerName={playerO} score={0} />
      </div>

      <div className="mb-6">
        <span className="text-sm uppercase tracking-widest text-white">
          {renderGameStatus(winner, currentPlayer)}
        </span>
      </div>
    </>
  );
};

export default ScoreBoard;
