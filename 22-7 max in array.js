function max_array(arrayOfNumbers) {
  let largest = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const element = arrayOfNumbers[i];
    if (element > largest) {
      largest = element;
    }
  }

  return largest;
}

const heights = [160, 150, 168, 177, 172, 179, 153, 190];

let tallest = max_array(heights);
console.log("The tallest person is : ", tallest);
