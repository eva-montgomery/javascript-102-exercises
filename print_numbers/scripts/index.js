// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(width, height) {
  
}

function printNumbers(x, y) {
  for (let i=x; i<=y; i++) {
        console.log(i);
    }
}  
printNumbers(1, 10);


// in python:
// # size = 5
// width = 5
// height = 5
// # width = 10
// # height = 10


// # let's use 2 nested loops:
// # - an outer loop that draws rows
// # - an inner loop that draws columns

// # Our "outer loop" determines how many rows to draw
// # of our square.
// y = 0
// while y < height:

//     # Our "inner loop" draws a row at a time
//     x = 0
//     while x < width:

//         # Draw!
//         print('*', end='')

//         # Move our inner loop closer to the end    
//         x = x + 1

//     # When the inner loop is finished, that means it
//     # drew a row. We print() to make it start a new line.
//     print()


//     # Move our outer loop closer to the end
//     y = y + 1