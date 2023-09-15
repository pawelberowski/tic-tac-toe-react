export const TurnDisplay = ({
  className,
  circlePlayerName,
  crossPlayerName,
  currentShape,
}) => {
  const currentPlayer = () => {
    if (currentShape === 'circle') {
      return circlePlayerName;
    }
    return crossPlayerName;
  };

  return <p className={className}>{`It's now ${currentPlayer()}'s turn`}</p>;
};
