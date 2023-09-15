import { useState } from 'react';
import { Tile } from '../Tile/Tile.jsx';
import styles from './board.module.css';
import { TurnDisplay } from '../TurnDisplay.jsx';
import { getWinner } from './getWinner.js';

export const Board = ({ circlePlayerName, crossPlayerName, setShow }) => {
  const [currentShape, setCurrentShape] = useState('circle');

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

  const resetTiles = () => {
    const newTiles = [...tiles];
    newTiles.forEach((tile) => {
      tile.value = null;
    });
    setTiles(newTiles);
  };

  const [winner, setWinner] = useState(null);

  const checkScore = () => {
    const winner = getWinner(tiles);
    if (winner === 'circle') {
      setWinner(`${circlePlayerName} Wins!`);
    }
    if (winner === 'cross') {
      setWinner(`${crossPlayerName} Wins!`);
    }
    if (
      tiles.every(function (tile) {
        return tile.value;
      })
    ) {
      setWinner('Draw!');
    }
  };

  const handleRestart = () => {
    resetTiles();
    setWinner(null);
    setShow(true);
  };

  return (
    <div>
      {!winner ? (
        <div className={styles.game}>
          <TurnDisplay
            className={styles.turnDisplay}
            circlePlayerName={circlePlayerName}
            crossPlayerName={crossPlayerName}
            currentShape={currentShape}
          />
          <div className={styles.board}>
            {tiles.map((tile, index) => (
              <Tile
                key={tile.id}
                shape={tile.value}
                changeShape={changeShape}
                checkScore={checkScore}
                index={index}
                currentShape={currentShape}
                setCurrentShape={setCurrentShape}
              />
            ))}
          </div>
        </div>
      ) : null}
      {winner ? (
        <div className={styles.endScreen}>
          <p>{`${winner}`}</p>
          <button className={styles.restartButton} onClick={handleRestart}>
            Restart
          </button>
        </div>
      ) : null}
    </div>
  );
};
