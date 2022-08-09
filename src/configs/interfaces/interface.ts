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
  refButtonValue: MutableRefObject<HTMLButtonElement | null> | null;
  setRefButtonValue: React.Dispatch<
    React.SetStateAction<MutableRefObject<HTMLButtonElement | null> | null>
  > | null;
  /*  refButtonValue:
    | HTMLSpanElement
    | LegacyRef<HTMLSpanElement>
    | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    | null;

  setRefButtonValue: React.Dispatch<
    React.SetStateAction<
      | HTMLSpanElement
      | LegacyRef<HTMLSpanElement>
      | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      | null
    >
  > | null; */
}

export interface SquareProps {
  value: number;
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
