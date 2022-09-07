// Write a function that returns the number of vowels withing a string.
// Vowel characters are "a", "e", "i", "o", and "u"
// MAke sure the function is case insensitive

function vowelss(str) {
  str = str.toLowerCase();
  let result = [];
  const allVowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (allVowels.includes(char)) {
      result.push(char);
    }
  }
  return result.length;
}

function vowels(str) {
  str = str.toLowerCase();
  const allVowels = ["a", "e", "i", "o", "u"];
  let vowelsFreq = {};
  let result = 0;
  let freq = {};

  for (let i = 0; i < allVowels.length; i++) {
    vowelsFreq[allVowels[i]]
      ? (vowelsFreq[allVowels[i]] += 1)
      : (vowelsFreq[allVowels[i]] = 1);
  }

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] ? (freq[str[i]] += 1) : (freq[str[i]] = 1);
  }

  for (const key in freq) {
    if (key in vowelsFreq) {
      result += freq[key];
    }
  }
  return result;
}

console.time("includes");
console.log(vowelss("I am a world-class developer using iterations"));
console.timeEnd("includes");

console.time("freq");
console.log(vowels("I am a world-class developer using iterations"));
console.timeEnd("freq");
