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
  const columnCount = Object.keys(cellValues).length;
  let isThereAWinner;

  for (let i = 0; i < columnCount - 1; i++) {
    isThereAWinner =
      cellValues[0][i] &&
      cellValues[0][i] === cellValues[1][i] &&
      cellValues[0][i] === cellValues[2][i] &&
      cellValues[1][i] === cellValues[2][i];

    if (isThereAWinner) break;
  }

  return isThereAWinner;
}

export function checkDiagonalWin(cellValues) {}
