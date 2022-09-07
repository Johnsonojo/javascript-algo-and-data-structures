// Write a function that takes a positive number N.
// Over multiple lines it should console log a pyramid shape
// with N levels using the # character. Male sure the pyramid
// has spaces on both sides.

const pyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    const padding = " ".repeat(n - i);
    const hashes = "#".repeat(i * 2 - 1);

    console.log(padding + hashes + padding);
  }
};

pyramid(10);
