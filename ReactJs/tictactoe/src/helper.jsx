export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // Row 1--: starting from index 0 ie. 0-1-...8
    [3, 4, 5], // Row 2 --
    [6, 7, 8], // Row 3 --
    [0, 3, 6], // Column 1 |
    [1, 4, 7], // Column 2 |
    [2, 5, 8], // Column 3 |
    [0, 4, 8], // Diagonal \  1,5,9 i.e 0,4,8
    [2, 4, 6], // Diagonal /  3,5,7 i.e 2,4,6
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Example usage:
// const squares = [
//   null, null, null,
//   "X", "X", "X",
//   null, null, null
// ];

// console.log(calculateWinner(squares));
