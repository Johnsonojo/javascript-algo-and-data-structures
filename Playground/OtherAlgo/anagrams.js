// check if two strings are anagrams of each other
// One string is an anagram of another if it uses the exact same characters
// in exact same quantity. only consider word characters
// and make sure the function is case insensitive.
// Examples:
// console.log(anagrams("hearts", " earths"));
// console.log(anagrams("hearts", "earths"));
// console.log(anagrams("Heart", " EARTH"));
// console.log(anagrams("lol", " lolc"));
// console.log(anagrams("lol", " loll"));
// console.log(anagrams("iceman", " cinema"));

const anagrams = (str1, str2) => {
  //lowercase both strings and remove non-alphanumeric characters
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, "");
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, "");

  // check if both strings are of the same length
  if (str1.length !== str2.length) return false;

  // create two empty objects to hold the frequencies of character
  let freqStr1 = {};
  let freqStr2 = {};
  // loop of each string and populate the created objects
  for (const char in str1) {
    freqStr1[char] ? (freqStr1[char] += 1) : (freqStr1[char] = 1);
  }
  for (const char in str2) {
    freqStr2[char] ? (freqStr2[char] += 1) : (freqStr2[char] = 1);
  }
  // loop over one object and check if the key exists in the second object the same amount of time
  for (const key in freqStr1) {
    if (!key in freqStr2) {
      return false;
    }
    if (freqStr2[key] !== freqStr1[key]) {
      return false;
    }
  }
  return true;
};
console.log(anagrams("hearts", " earths"));
console.log(anagrams("hearts", "earths"));
console.log(anagrams("Heart!", " EARTH"));
console.log(anagrams("lol", " lolc"));
console.log(anagrams("lol", " loll"));
console.log(anagrams("iceman", " cinema"));

const anagrams2 = (str1, str2) => {
  str1 = str1
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("")
    .sort()
    .join("");
  str2 = str2
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("")
    .sort()
    .join("");

  return str1 === str2;
};
console.log("=======================================================");
console.log(anagrams2("hearts", " earths"));
console.log(anagrams2("hearts", "earths"));
console.log(anagrams2("Heart!", " EARTH"));
console.log(anagrams2("lol", " lolc"));
console.log(anagrams2("lol", " loll"));
console.log(anagrams2("iceman", " cinema"));
