function second_largest(array) {
  let firstLargest = [0];
  let second_largest = [1];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > firstLargest) {
      second_largest = firstLargest;
      firstLargest = element;
    } else if (element > second_largest && element < firstLargest) {
      second_largest = element;
    }
  }
  console.log(firstLargest);
  console.log(second_largest);
}

const numbers = [160, 150, 168, 200, 177, 172, 179, 195, 153, 190];

second_largest(numbers);
