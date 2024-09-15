import { type Player } from "../../../entities";
import { winningLines } from "../constants";

export const calculateWinner = (squares: Player[]): Player => {
  for (const [a, b, c] of winningLines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
