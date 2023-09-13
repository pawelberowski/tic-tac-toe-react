import { useState } from 'react';
import { Tile } from '../Tile/Tile.jsx';
import styles from './board.module.css';

export const Board = () => {
  const [tiles, setTiles] = useState([
    '',
    'circle',
    '',
    '',
    '',
    'cross',
    '',
    '',
    '',
  ]);
  return (
    <div className={styles.board}>
      {tiles.map((tile) => (
        <Tile shape={tile} />
      ))}
    </div>
  );
};
