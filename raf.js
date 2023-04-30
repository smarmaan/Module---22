const shoppingCart = {
  books: 3,
  color: ["yellow", "blue", "orange"],
  sunglass: 4,
  pen: 26,
  Keyboard: 6,
  numbers: [2, 5, 7, 9, 6, 1],
};

function janina(number) {
  let properties = Object.keys(number);

  for (let i = 0; i < properties.length; i++) {
    const element = properties[i];
    console.log(element, ":", number[element]);
  }
}
janina(shoppingCart);
