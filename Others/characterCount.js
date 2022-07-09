function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    // console.log("char", char);
    console.log("result[char]=======>111111", result[char]);
    if (result[char] > 0 ? result[char]++ : (result[char] = 1));

    // console.log("result", result);
    console.log("result[char]=======>222222", result[char]);
    // console.log("result[char]>0", result[char] > 0);
  }
  return result;
}

console.log(charCount("Adesewa"));
