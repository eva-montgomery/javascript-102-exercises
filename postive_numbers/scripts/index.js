// Just the positives
// Write a function positiveNumbers which is given an array of 
// numbers and returns a new array containing only the positive numbers 
// within the given array.

// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []


function positiveNumbers(numbers) {
  const emptyArr = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      emptyArr.push(num);
    }
  }
    return emptyArr;
}
console.log(positiveNumbers([1, -3, 5, -3, 4]));

