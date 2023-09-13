import styles from './style.module.css';

export const Tile = ({ shape }) => {
  return <div className={`${styles.tile} ${styles[shape]}`}>Tile</div>;
};
