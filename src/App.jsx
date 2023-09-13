import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput';
import { StartButton } from './StartButton';
import styles from './startScreen.module.css';
import { GameScreen } from './GameScreen/GameScreen.jsx';

export const App = () => {
  const [circlePlayerName, setCirclePlayerName] = useState('');
  const [crossPlayerName, setCrossPlayerName] = useState('');

  const [show, setShow] = useState(true);

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
          />
          <PlayerNameInput
            shape="cross"
            onChange={handleCrossPlayerInputChange}
          />
          <StartButton onClick={handleStart} />
        </div>
      ) : null}

      {!show ? <GameScreen /> : null}
    </div>
  );
};
