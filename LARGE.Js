const numbers = [160, 150, 168, 177, 172, 179, 153, 190];

function secondLargest(numbers) {
  let firstLargest = [0];
  let secondLargest = [1];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] != firstLargest) {
      secondLargest = numbers[i];
    }
  }

  return secondLargest;
}

console.log(secondLargest(numbers));
