// Write a function that takes an array of three numbers and returns ten arrays of three numbers,
// each array is gotten by adding one to each of three numbers

// function addOne(arr) {
//   let arrList = [];
//   for (var i = 0; i < 10; i++) {
//     // add one to each of three numbers
//     arrList.push([arr[0] + i, arr[1] + i, arr[2] + i]);
//   }
//   return arrList;
// }
// console.log(addOne([7, 6, 0]));

function lockCodeFinder(numbs) {
  if (typeof numbs !== "number") {
    return "Not a number";
  }
  let numbsList = [];
  // convert to array
  let numbsArr = Array.from(numbs.toString()).map(Number);
  for (var i = 0; i < 10; i++) {
    numbsList.push([numbsArr[0] + i, numbsArr[1] + i, numbsArr[2] + i]);
  }
  // loop through each array and print out each array
  for (var i = 0; i < numbsList.length; i++) {
    console.log(numbsList[i]);
  }
  return numbsList;
}

console.log(lockCodeFinder(760));
console.log(lockCodeFinder(502));
