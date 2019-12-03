// Factor a Number
// Write a function factors which is given a number and returns an array 
// containing all its factors. What are factors? 
// https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number


function factors(number) {
  // create an empty list aka array
  const emptyArr = [];
  for (let factor = 1; factor < (number + 1); factor++) {
    // check if number is evenly dividable with the factor
    if (number % factor === 0) {
      // add number to empty array
      emptyArr.push(factor);
    }
}
  return emptyArr;
}
console.log(factors(120));


function factors(number) {
  const emptyArr = [];
  for (let factor = 0; factor < (number +1); factor++) {
  if (number % factor === 0) {
    emptyArr.push(factor);
  } 
}
  return emptyArr;
}

console.log(factors(666));