// Node Modules
import { createContext, useContext, useState, RefObject } from "react";

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
  playerXScore: null,
  setPlayerXScore: null,
  playerOScore: null,
  setPlayerOScore: null,
  animateWinner: null,
  setAnimateWinner: null,
  /*  refButtonValue: null,
  setRefButtonValue: null, */
};

const BoardContext = createContext(createContextInitialVal);

export const BoardContextProvider = ({ children }: Children) => {
  const [currentPlayer, setCurrentPlayer] = useState<string>(playerX);
  const [winner, setWinner] = useState<string>(noWinner);
  const [playerXMoves, setPlayerXMoves] = useState<(number | string)[]>([]);
  const [playerOMoves, setPlayerOMoves] = useState<(number | string)[]>([]);
  const [playerXScore, setPlayerXScore] = useState<number>(0);
  const [playerOScore, setPlayerOScore] = useState<number>(0);
  const [animateWinner, setAnimateWinner] = useState<boolean>(false);
  /* const [refButtonValue, setRefButtonValue] = useState<
    (RefObject<HTMLButtonElement> | undefined)[] | null
  >(null); */

  const value: BoardContextValues = {
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    playerXMoves,
    setPlayerXMoves,
    playerOMoves,
    setPlayerOMoves,
    playerXScore,
    setPlayerXScore,
    playerOScore,
    setPlayerOScore,
    animateWinner,
    setAnimateWinner,
    /*    refButtonValue,
    setRefButtonValue, */
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
