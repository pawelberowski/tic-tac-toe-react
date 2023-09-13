import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput.jsx';
import { StartButton } from './StartButton.jsx';
import styles from './startScreen.module.css';
import { Tile } from './Tile.jsx';
export const App = () => {
  const [circlePlayerName, setCirclePlayerName] = useState('');
  const [crossPlayerName, setCrossPlayerName] = useState('');

  const [show, setShow] = useState(true);

  const [tiles, setTiles] = useState(['', '', '', '', '', '', '', '', '']);

  const [currentShape, setCurrentShape] = useState('circle');

  const handleCirclePlayerInputChange = (event) => {
    setCirclePlayerName(event.target.value);
  };

  const handleCrossPlayerInputChange = (event) => {
    setCrossPlayerName(event.target.value);
  };

  const handleStart = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <div className={styles.startScreen}>
          <PlayerNameInput
            shape="circle"
            onChange={handleCirclePlayerInputChange}
            show={show}
          />
          <PlayerNameInput
            shape="cross"
            onChange={handleCrossPlayerInputChange}
            show={show}
          />
          <StartButton onClick={handleStart} />
        </div>
      ) : null}

      {!show ? (
        <div className="board">
          {tiles.map((tile, index) => (
            <Tile
              key={index}
              id={index}
              tile={tile}
              tiles={tiles}
              setTiles={setTiles}
              currentShape={currentShape}
              setCurrentShape={setCurrentShape}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
