function calculateAmount(savingsFrequency, savingsDuration, savingsAmount) {
  let savingsTarget;

  const savingsDurationNumber = savingsDuration.split(" ")[0];
  const savingsDurationUnit = savingsDuration.split(" ")[1];

  if (savingsFrequency === "daily") {
    savingsTarget = savingsAmount * savingsDurationNumber * 30;
  }
  if (savingsFrequency === "weekly") {
    savingsTarget = savingsAmount * savingsDurationNumber * (30 / 7);
  }
  if (savingsFrequency === "monthly") {
    savingsTarget = savingsAmount * savingsDurationNumber;
  }
  if (savingsDurationUnit === "days" && savingsFrequency === "daily") {
    savingsTarget = savingsAmount * savingsDurationNumber;
  }
  if (savingsDurationUnit === "days" && savingsFrequency === "weekly") {
    savingsTarget = savingsAmount * (savingsDurationNumber / 7);
  }
  if (savingsDurationUnit === "days" && savingsFrequency === "monthly") {
    savingsTarget = savingsAmount * (savingsDurationNumber / 30);
  }
  if (savingsDurationUnit === "year" && savingsFrequency === "monthly") {
    savingsTarget = savingsAmount * savingsDurationNumber * 12 * 30;
  }
  if (savingsDurationUnit === "year" && savingsFrequency === "daily") {
    savingsTarget = savingsAmount * savingsDurationNumber * 365;
  }
  if (savingsDurationUnit === "year" && savingsFrequency === "weekly") {
    savingsTarget = savingsAmount * savingsDurationNumber * 52;
  }
  return savingsTarget;
}

console.log(calculateAmount("daily", "127 days", 100));
console.log(calculateAmount("weekly", "127 days", 100));
console.log(calculateAmount("monthly", "127 days", 100));
console.log(calculateAmount("weekly", "1 months", 100));
console.log(calculateAmount("daily", "1 year", 100));
console.log(calculateAmount("weekly", "1 year", 100));
console.log(calculateAmount("monthly", "1 year", 100));
