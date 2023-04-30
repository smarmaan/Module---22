function min_array(arrayOfNumbers) {
  let smallest = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const element = arrayOfNumbers[i];
    if (smallest > element) {
      smallest = element;
    }
  }

  return smallest;
}

const lowest = [160, 150, 168, 177, 172, 179, 153, 190];

let smallest = min_array(lowest);
console.log("The tallest person is : ", smallest);
