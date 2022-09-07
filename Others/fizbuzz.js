function fizzBuzz(n) {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fuzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(31);
