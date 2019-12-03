// Write a function printBanner which is given some text and prints a 
// banner with a border surrounding the text. 
// The border has to stretch to the length of the text.

function printBanner(text) {
  let topBanner = "";
  // creates top banner lenght + 4 due to the spaces on each side
  for (let asteriksNumber = 0; asteriksNumber < (text.length + 4); asteriksNumber++) {
    topBanner += "*";
  }
  console.log(topBanner);
  console.log(`* ${text} *`);
  console.log(topBanner);
}

// print banner (`Welcome to DigitalCrafts`)

function factors(number) {
  const newArray = [];
  for (let factor = 1; factor < (number + 1); factor++) {
    if (number % factor === 0) {
      newArray.push(factor);
    }
  }
return newArray;
}
printBanner(`Welcome to DigitalCrafts`);
