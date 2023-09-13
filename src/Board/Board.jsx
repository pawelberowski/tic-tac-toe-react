import { useState } from 'react';
import { Tile } from '../Tile/Tile.jsx';
import styles from './board.module.css';

export const Board = () => {
  const [isNowCircle, setIsNowCircle] = useState(true);

  const [tiles, setTiles] = useState([
    {
      id: 0,
      value: null,
    },
    {
      id: 1,
      value: null,
    },
    {
      id: 2,
      value: null,
    },
    {
      id: 3,
      value: null,
    },
    {
      id: 4,
      value: null,
    },
    {
      id: 5,
      value: null,
    },
    {
      id: 6,
      value: null,
    },
    {
      id: 7,
      value: null,
    },
    {
      id: 8,
      value: null,
    },
  ]);

  const changeShape = (shape, index) => {
    const newTiles = [...tiles];
    newTiles[index].value = shape;
    setTiles(newTiles);
  };

  return (
    <div className={styles.board}>
      {tiles.map((tile, index) => (
        <Tile
          key={tile.id}
          shape={tile.value}
          changeShape={changeShape}
          index={index}
          isNowCircle={isNowCircle}
          setIsNowCircle={setIsNowCircle}
        />
      ))}
    </div>
  );
};
