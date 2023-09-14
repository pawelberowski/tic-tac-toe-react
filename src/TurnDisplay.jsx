export const TurnDisplay = ({
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

  return <p>{`It's now ${currentPlayer()}'s turn`}</p>;
};
