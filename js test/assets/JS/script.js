// task1
function check(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
  return false;
}
let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(check(11, myarr));

// task2
// function calc(a, b, ch) {
//   switch (ch) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "Lol";
//   }
// }
// console.log(calc(12, 5, "+"));
