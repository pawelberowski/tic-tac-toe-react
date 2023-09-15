export function getWinner(tiles) {
  let winner = null;

  const winingCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  winingCombos.forEach(function (array) {
    const circleWins = array.every(function (number) {
      return tiles[number].value === 'circle';
    });
    const crossWins = array.every(function (number) {
      return tiles[number].value === 'cross';
    });
    if (circleWins) {
      winner = 'circle';
    }
    if (crossWins) {
      winner = 'cross';
    }
  });
  return winner;
}
