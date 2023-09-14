import { useState } from 'react';
import { PlayerNameInput } from './PlayerNameInput';
import { StartButton } from './StartButton';
import { Board } from './Board/Board.jsx';
import styles from './styles.css';

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

      {!show ? (
        <Board
          circlePlayerName={circlePlayerName}
          crossPlayerName={crossPlayerName}
        />
      ) : null}
    </div>
  );
};
