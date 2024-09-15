import { useTicTacToe } from "../hooks/useTicTacToe";
import { Board } from "./Board";

import "./TicTacToe.css";

export const TicTacToe = () => {
  const { squares, status, handleClick } = useTicTacToe();

  return (
    <div className="game">
      <div className="game-status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};
