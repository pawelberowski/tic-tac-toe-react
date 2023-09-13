import { useState } from 'react';
import { Tile } from '../Tile/Tile.jsx';
import styles from './board.module.css';

export const Board = () => {
  const [isNowCircle, setIsNowCircle] = useState(true);

  const [tiles, setTiles] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const changeShape = (shape, index) => {
    const newTiles = [...tiles];
    newTiles[index] = shape;
    setTiles(newTiles);
  };

  return (
    <div className={styles.board}>
      {tiles.map((tile, index) => (
        <Tile
          shape={tile}
          changeShape={changeShape}
          index={index}
          isNowCircle={isNowCircle}
          setIsNowCircle={setIsNowCircle}
        />
      ))}
    </div>
  );
};
