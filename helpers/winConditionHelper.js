function checkForRepeatingValues(values) {
  return values.some((value) => {
    return value.every((subValue) => {
      return subValue && subValue === value[0];
    });
  });
}

export function checkHorizontalWin(cellValues) {
  const rows = Object.values(cellValues);
  const isThereAWinner = checkForRepeatingValues(rows);
  return isThereAWinner;
}

export function checkVerticalWin(cellValues) {
  const rows = Object.values(cellValues);
  const rowsLength = rows.length;
  let columnValues = [];

  for (let column = 0; column < rowsLength; column++) {
    columnValues.push([ cellValues[0][column], cellValues[1][column], cellValues[2][column] ]);
  }

  const isThereAWinner = checkForRepeatingValues(columnValues);
  return isThereAWinner;
}

export function checkDiagonalWin(cellValues) {
  const diagonals = [
    [ cellValues[0][2], cellValues[1][1], cellValues[2][0] ],
    [ cellValues[0][0], cellValues[1][1], cellValues[2][2] ],
  ];

  const isThereAWinner = checkForRepeatingValues(diagonals);
  return isThereAWinner;
}
