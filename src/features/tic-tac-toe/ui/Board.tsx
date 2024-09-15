import { type Player } from "../../../entities";
import { Square } from "./Square";

interface BoardProps {
  squares: Player[];
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: BoardProps) => {
  const rows = [0, 1, 2];

  const renderRow = (rowIndex: number) => (
    <div className="board-row" key={rowIndex}>
      {rows.map((colIndex) => {
        const index = rowIndex * 3 + colIndex;
        return (
          <Square
            key={index}
            value={squares[index]}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );

  return <div>{rows.map(renderRow)}</div>;
};
