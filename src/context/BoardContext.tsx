// Node Modules
import { createContext, useContext, useState, Ref } from "react";

// Configs
import { Children, BoardContextValues } from "../configs/interfaces/interface";
import { playerX, noWinner } from "../configs/contants/constant";

const createContextInitialVal: BoardContextValues = {
  currentPlayer: null,
  setCurrentPlayer: null,
  winner: null,
  setWinner: null,
  playerXMoves: null,
  setPlayerXMoves: null,
  playerOMoves: null,
  setPlayerOMoves: null,
  refButtonValue: null,
  setRefButtonValue: null,
};

const BoardContext = createContext(createContextInitialVal);

export const BoardContextProvider = ({ children }: Children) => {
  const [currentPlayer, setCurrentPlayer] = useState<string>(playerX);
  const [winner, setWinner] = useState<string>(noWinner);
  const [playerXMoves, setPlayerXMoves] = useState<(number | string)[]>([]);
  const [playerOMoves, setPlayerOMoves] = useState<(number | string)[]>([]);
  const [refButtonValue, setRefButtonValue] = useState<
    (Ref<HTMLButtonElement> | undefined)[] | null
  >(null);

  const value: BoardContextValues = {
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    playerXMoves,
    setPlayerXMoves,
    playerOMoves,
    setPlayerOMoves,
    refButtonValue,
    setRefButtonValue,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
