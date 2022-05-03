// let word = "I love Adesewa so much";
// word = word.toLowerCase();

// // for (let i = 0; i < word.length; i++) {
// //   const element = word[i];
// //   console.log(element);
// // }
// console.log(word.indexOf("i"));

function naiveString(long, short) {
  //

  for (let i = 0; i < long.length; i++) {
    for (let i = 0; i < short.length; j++) {
      if (long[i] !== short[j]) break;
    }
  }
}
