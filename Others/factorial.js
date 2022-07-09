function factorial(n) {
  let total = 1;
  if (n <= 1) return total;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(1));
