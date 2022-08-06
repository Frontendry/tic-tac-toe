// Node Modules
import { createContext, useContext, useState } from "react";

// Configs
import { Children, BoardContextValues } from "../configs/interfaces/interface";
import { playerX } from "../configs/contants/constant";

const createContextInitialVal: BoardContextValues = {
  currentPlayer: null,
  setCurrentPlayer: null,
  winner: null,
  setWinner: null,
  playerXMoves: null,
  setPlayerXMoves: null,
  playerOMoves: null,
  setPlayerOMoves: null,
};

const BoardContext = createContext(createContextInitialVal);

export const BoardContextProvider = ({ children }: Children) => {
  const [currentPlayer, setCurrentPlayer] = useState<string>(playerX);
  const [winner, setWinner] = useState<string>("");
  const [playerXMoves, setPlayerXMoves] = useState<number[]>([]);
  const [playerOMoves, setPlayerOMoves] = useState<number[]>([]);

  const value: BoardContextValues = {
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    playerXMoves,
    setPlayerXMoves,
    playerOMoves,
    setPlayerOMoves,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
