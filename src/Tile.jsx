export const Tile = ({
  id,
  tile,
  tiles,
  setTiles,
  currentShape,
  setCurrentShape,
}) => {
  const handleClick = (event) => {
    const taken =
      event.target.firstChild.classList.contains('circle') ||
      event.target.firstChild.classList.contains('cross');
    if (!taken) {
      if (currentShape === 'circle') {
        event.target.firstChild.classList.add(currentShape);
        handleTileChange('circle');
        setCurrentShape('cross');
        return;
      }
      event.target.firstChild.classList.add(currentShape);
      handleTileChange('cross');
      setCurrentShape('circle');
    }
  };

  const handleTileChange = (className) => {
    tiles.map((tile, index) => {
      if (index === id) {
        return className;
      }
    });
  };

  return (
    <div className="tile" id={id} onClick={handleClick}>
      <div className={tile}></div>
    </div>
  );
};
