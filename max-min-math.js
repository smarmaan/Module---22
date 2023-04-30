function max_array(arrayOfNumbers) {
  let largest = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    largest = Math.max(largest, arrayOfNumbers[i]);
  }

  return largest;
}

const heights = [160, 150, 168, 177, 172, 179, 153, 190];

let tallest = max_array(heights);
console.log("The tallest person is : ", tallest);

// 
// 
// 
// 
// 
// 
// 
// 

function min_array(arrayOfNumbers) {
  let smallest = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    smallest = Math.min(smallest, arrayOfNumbers[i]);
  }

  return smallest;
}

let smallest = min_array(heights);
console.log("The smallest person is : ", smallest);
