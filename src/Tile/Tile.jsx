import styles from './style.module.css';

export const Tile = ({
  shape,
  changeShape,
  checkScore,
  index,
  currentShape,
  setCurrentShape,
}) => {
  const handleClick = () => {
    if (shape) {
      return;
    }
    if (currentShape === 'circle') {
      changeShape('circle', index);
      checkScore();
      setCurrentShape('cross');
      return;
    }
    changeShape('cross', index);
    checkScore();
    setCurrentShape('circle');
  };

  return (
    <div className={`${styles.tile} ${styles[shape]}`} onClick={handleClick} />
  );
};
