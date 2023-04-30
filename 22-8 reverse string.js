function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const element = string[i];
    reversed = reversed + element;
  }

  return reversed;
}

const fullName = "Soyed Muhammad Muntasir Billah Armaan Hossain";
reverseString(fullName);
// console.log(reverseString(fullName));
//
//
//
//
//
//
//

function rev_split(string) {
  const new_word = string.split(" ");
  let new_sentence = [];
  for (let i = new_word.length - 1; i >= 0; i--) {
    const element = new_word[i];
    new_sentence.push(element);
  }
  console.log(new_sentence.join(" "));
}

rev_split(fullName);
