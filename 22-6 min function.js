function min_num(scores) {
    let values = Object.values(scores);
    let min = values[0];
    for (let i = 0; i < values.length; i++) {
      if (min > values[i]) {
        min = values[i];
      }
    }
  
    return console.log(min);
  }
  
  const numbers = { Sazid: 89, Sourov: 90.5, Armaan: 95 };
  
  min_num(numbers);
  