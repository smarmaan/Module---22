let first = 10;
let second = 17;

console.log(first, second);

[first, second] = [second, first];

console.log(first, second);

let temp = first;
first = second;
second = temp;
console.log(first, second);
