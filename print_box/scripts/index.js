// Print a box
// Write function printBox which is given a width and height 
// and prints a hollow box of those given dimensions.

function printBox(row, column) {
  for (let i = 0; i <= row; i++) {
    testArr = [];
      for (var j = 0; j < row; j++);
       testArr += "*";
       console.log(testArr);
}
    for (let x = 0; x <= column, x++) {
      testArr2 = [];
        for (var y = 0; y < column; y++);
          testArr2 += "*";
          console.log(testArr2);
  }
}
printBox(6, 4);

