// Print a Square
// Write a function printSquare which is 
// given a size and prints a square of that size using asterisks.

function printSquare(row) {
for (let i = 0; i <= row; i++) {
  testArr = [];
  for (var j = 0; j < row; j++)
    testArr += "*";
    console.log(testArr);
}
}
printSquare(5);