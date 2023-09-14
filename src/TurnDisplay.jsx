export const TurnDisplay = ({
  className,
  circlePlayerName,
  crossPlayerName,
  isNowCircle,
}) => {
  const currentPlayer = () => {
    if (isNowCircle) {
      return circlePlayerName;
    }
    return crossPlayerName;
  };

  return <p className={className}>{`It's now ${currentPlayer()}'s turn`}</p>;
};
