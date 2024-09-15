import { type Player } from "../../../entities";

interface SquareProps {
  value: Player;
  onClick: () => void;
}

export const Square = ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);
