// Given a string str, return the most frequent character(alphabet in the string)
// function repeating(str) {
//   // remove a digits from the string
//   str = str.replace(/[0-9]/g, "");

//   // create a variable to store the frequency of the characters and initialize it as an object
//   let frequency = {};
//   // loop over the string and populate the object
//   for (const item of str) {
//     frequency[item] ? (frequency[item] += 1) : (frequency[item] = 1);
//   }
//   // find the key in the object with the highest value
//   const maxValue = Object.entries(frequency).sort((x, y) => y[1] - x[1])[0];
//   console.log("maxValue", maxValue);
//   return maxValue[0];
// }

// function repeating(str) {
//   let maxCharCount = 0;
//   let maxChar = "";
//   // remove a digits from the string
//   str = str.replace(/[0-9]/g, "");

//   // create a variable to store the frequency of the characters and initialize it as an object
//   let frequency = {};
//   // loop over the string and populate the object
//   for (const item of str) {
//     frequency[item] ? (frequency[item] += 1) : (frequency[item] = 1);
//     // find the key in the object with the highest value
//     if (frequency[item] > maxCharCount) {
//       maxCharCount = frequency[item];
//       maxChar = item;
//     }
//   }
//   return maxChar;
// }

function repeating(str) {
  // remove a digits from the string
  str = str.replace(/[a-zA-Z]/g, "");

  // create a variable to store the frequency of the characters and initialize it as an object
  let frequency = {};
  // loop over the string and populate the object
  for (const item of str) {
    frequency[item] ? (frequency[item] += 1) : (frequency[item] = 1);
  }
  // find the key in the object with the highest value
  const maxValue = Object.entries(frequency).sort((x, y) => y[1] - x[1])[0];
  console.log("maxValue", maxValue);
  return maxValue[0];
}

console.log(repeating("abcddefda1111133333333"));
console.log(repeating("AA0AB0BB0ccc0aa0aw00woOBBBw123123"));
