import { useState } from 'react';
import { Tile } from '../Tile/Tile.jsx';
import styles from './board.module.css';
import { TurnDisplay } from '../TurnDisplay.jsx';

export const Board = ({ circlePlayerName, crossPlayerName }) => {
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

  const winingCombos = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
  ];

  const [winner, setWinner] = useState(null)

  const checkScore = () => {
    winingCombos.forEach(function (array) {
      const circleWins = array.every(function (number) {
        return tiles[number].value === 'circle';
      })
      const crossWins = array.every(function (number) {
        return tiles[number].value === 'cross';
      })
      if (circleWins) {
        setWinner('Circle Wins!');
      }
      if (crossWins) {
        setWinner('Cross Wins!');
      }
    })

  }

  return (
    <div className={styles.game}>
      <TurnDisplay
        className={styles.turnDisplay}
        circlePlayerName={circlePlayerName}
        crossPlayerName={crossPlayerName}
        isNowCircle={isNowCircle}
      />
      <div className={styles.board}>
        {tiles.map((tile, index) => (
          <Tile
            key={tile.id}
            shape={tile.value}
            changeShape={changeShape}
            checkScore={checkScore}
            index={index}
            isNowCircle={isNowCircle}
            setIsNowCircle={setIsNowCircle}
          />
        ))}
      </div>
      {winner ? (<div>{`${winner}`}</div>) : null}
    </div>
  );
};
