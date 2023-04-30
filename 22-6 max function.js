function max_num(scores) {
  let values = Object.values(scores);
  let properties = Object.keys(scores);
  let max = values[0];
  for (let i = 0; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }

  return console.log(max);
}

const numbers = { Sazid: 89, Sourov: 90.5, Armaan: 95 };

max_num(numbers);
