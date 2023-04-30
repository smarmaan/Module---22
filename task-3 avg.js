function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
    average = sum / array.length;
  }
 return console.log(average);
}

const numbers = [160, 150, 168, 177, 172, 179, 153, 190];

average(numbers);
