import { Board } from '../Board/Board.jsx';
import styles from './game.module.css';

export const GameScreen = () => {
  return (
    <div className={styles.game}>
      <Board />
    </div>
  );
};
