import styles from './style.module.css';

export const Tile = ({
  shape,
  changeShape,
  checkScore,
  index,
  isNowCircle,
  setIsNowCircle,
}) => {
  const handleClick = () => {
    if (shape) {
      return;
    }
    if (isNowCircle) {
      changeShape('circle', index);
      checkScore();
      setIsNowCircle(false);
      return;
    }
    changeShape('cross', index);
    setIsNowCircle(true);
  };

  return (
    <div className={`${styles.tile} ${styles[shape]}`} onClick={handleClick} />
  );
};
