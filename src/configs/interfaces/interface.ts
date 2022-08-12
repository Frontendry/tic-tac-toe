import { Ref } from "react";

export interface Children {
  children: JSX.Element | JSX.Element[];
}

export interface BoardContextValues {
  currentPlayer: string | null;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>> | null;
  winner: string | null;
  setWinner: React.Dispatch<React.SetStateAction<string>> | null;
  playerXMoves: (number | string)[] | null;
  setPlayerXMoves: React.Dispatch<
    React.SetStateAction<(number | string)[]>
  > | null;
  playerOMoves: (number | string)[] | null;
  setPlayerOMoves: React.Dispatch<
    React.SetStateAction<(number | string)[]>
  > | null;
  /*  refButtonValue: React.MutableRefObject<never[]> | null;
  setRefButtonValue: React.Dispatch<
    React.SetStateAction<React.MutableRefObject<never[]> | null>
  > | null; */
  refButtonValue: (Ref<HTMLButtonElement> | undefined)[] | null;
  setRefButtonValue: React.Dispatch<
    React.SetStateAction<(Ref<HTMLButtonElement> | undefined)[] | null>
  > | null;
}

export interface SquareProps {
  squareVal: number | string;
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
