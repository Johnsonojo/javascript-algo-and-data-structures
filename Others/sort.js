// function compar(a, b) {
//   return a - b;
// }
// function sortArr(arr) {
//   // loop over the array of number
//   // if the first element of the array is smaller than the next element
//   // move to the next element
//   // else replace the first element with the next element
//   return arr.sort(compar);
// }
// console.log(sortArr([6, 4, 15, 10]));
// // console.log(sortArr([23, 45, 6, 12, 13]));

function generateRandomStrings() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(generateRandomStrings());
