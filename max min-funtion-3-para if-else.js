function max_number(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1, "is the maximum number");
  } else if (num2 > num3 && num2 > num1) {
    console.log(num2, "is the maximum number");
  } else {
    console.log(num3, "is the maximum number");
  }
}

max_number(10, 15, 27);

function min_number(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(num1, "is the minimum number");
  } else if (num2 < num3 && num2 < num1) {
    console.log(num2, "is the minimum number");
  } else {
    console.log(num3, "is the minimum number");
  }
}

min_number(10, 15, 27)