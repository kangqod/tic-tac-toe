import { useState } from "react";
import { PLAYERS, type Player } from "../../../entities";
import { SQUARES } from "../constants";
import { calculateWinner } from "../lib";

interface UseTicTacToe {
  squares: Player[];
  status: string;
  handleClick: (i: number) => void;
}

export const useTicTacToe = (): UseTicTacToe => {
  const [squares, setSquares] = useState<Player[]>(SQUARES);
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (i: number): void => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    newSquares[i] = isXNext ? PLAYERS.X : PLAYERS.O;
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? PLAYERS.X : PLAYERS.O}`;

  return {
    squares,
    status,
    handleClick,
  };
};
