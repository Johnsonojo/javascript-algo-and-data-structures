// Given a phrase, substitute each characters by shifting it up
// the alphabet by a given integer. If necessary, the shifting should
// wrap around back to the beginning of the alphabet
// Make sure the function only shifts letters

const caesarCipher = (str, shift) => {
  let alphabetsArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabetsArr.indexOf(char);
    if (charIndex === -1) {
      result += char;
      continue;
    }

    const shiftedCharIndex = (charIndex + shift) % 26;
    result += alphabetsArr[shiftedCharIndex];
  }
  return result;
};

console.log(caesarCipher("gurer ner 9 qbtf!", 13)); // "there are 9 dogs!"
