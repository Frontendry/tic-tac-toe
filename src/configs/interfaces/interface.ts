import { MutableRefObject } from "react";

export interface Children {
  children: JSX.Element | JSX.Element[];
}

export interface BoardContextValues {
  currentPlayer: string | null;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>> | null;
  winner: string | null;
  setWinner: React.Dispatch<React.SetStateAction<string>> | null;
  playerXMoves: number[] | null;
  setPlayerXMoves: React.Dispatch<React.SetStateAction<number[]>> | null;
  playerOMoves: number[] | null;
  setPlayerOMoves: React.Dispatch<React.SetStateAction<number[]>> | null;
  refButtonValue: React.MutableRefObject<never[]> | null;
  setRefButtonValue: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<never[]>>
  > | null;
}

export interface SquareProps {
  value: number;
  ref: React.Ref<HTMLButtonElement>;
}

export interface PlayerScoreProps {
  playerName: string;
  score: number;
}

export interface GameStatus {
  startGame: string;
  playerXTurn: string;
  playerOTurn: string;
  gameOver: string;
}
