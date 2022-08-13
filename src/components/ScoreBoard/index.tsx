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
  const {
    currentPlayer,
    winner,
    setWinner,
    playerOMoves,
    playerXMoves,
    playerXScore,
    setPlayerXScore,
    playerOScore,
    setPlayerOScore,
    setAnimateWinner,
  } = useBoardContext();

  useEffect(() => {
    const directionWinner = (
      playerXValues: (number | string)[],
      playerOValues: (number | string)[],
      setwinner: React.Dispatch<React.SetStateAction<string>> | null,
      playerX: string,
      playerO: string,
      winningCombinations: number[][],
      setplayerxscore: React.Dispatch<React.SetStateAction<number>> | null,
      setplayeroscore: React.Dispatch<React.SetStateAction<number>> | null
    ) => {
      const scoreTally = (player: string) => {
        if (player === playerX) {
          setplayerxscore && setplayerxscore((prevCount) => prevCount + 1);
        } else {
          setplayeroscore && setplayeroscore((prevCount) => prevCount + 1);
        }
      };

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
          setwinner !== null && setwinner(player);
          scoreTally(player);
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
        const differentDirections = [
          rowWinningCombos,
          columnWinningCombos,
          diagonalWinningCombos,
        ];

        // Loop through the different winning directions
        differentDirections.forEach((differentDirection) => {
          directionWinner(
            playerXMoves,
            playerOMoves,
            setWinner,
            playerX,
            playerO,
            differentDirection,
            setPlayerXScore,
            setPlayerOScore
          );
        });
      }
    };

    if (playerXMoves !== null && playerOMoves !== null) {
      determineWinner(playerXMoves, playerOMoves);
    }
  }, [
    playerXMoves,
    playerOMoves,
    winner,
    setWinner,
    playerXScore,
    setPlayerXScore,
    playerOScore,
    setPlayerOScore,
  ]);

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
        <PlayerScore playerName={playerX} score={playerXScore} />
        <PlayerScore playerName={playerO} score={playerOScore} />
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
