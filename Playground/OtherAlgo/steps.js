// Write a function that takes a number n.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!

const steps = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i));
  }
};

steps(10);
