// Sum the numbers
// Write a function sumNumbers which is given an array of numbers 
// and returns the sum of the numbers.

// > sumNumbers([1, 4, 8])
// 13

function sumNumbers(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}
console.log(sumNumbers([1, 4, 8]));