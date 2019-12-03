
// Print a box
// Write function printBox which is given a width and height 
// and prints a hollow box of those given dimensions.


function printBox(width, height) {
  let emptyString = "";
  // creates top and bottom parts of box made of *
  for (let i = 0; i<width; i++) {
    emptyString += "*";
  }
  // prints top * of the bxo
  console.log(emptyString);
  // prints middle line of box
  for (let j = 0; j<(height - 2); j++) {
    // starts the * with an initial *
    let middleString = "*";
    // adds the correct amount of empty space
    for (let h = 0; h<width - 2; h++) {
      middleString += " ";
    }
    // adds the last * on the far side
    middleString += "*";
    // prints the actual middle line each time
    console.log(middleString);
  }
  // prints the bottom of the box
  console.log(emptyString);
}
printBox(6, 4);