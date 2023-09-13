import { useState } from 'react';
import { Tile } from './Tile.jsx';

export const Board = () => {
  const [tiles, setTiles] = useState(['', '', '', '', '', '', '', '', '']);

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile key={index} id={index} tile={tile} />
      ))}
    </div>
  );
};
