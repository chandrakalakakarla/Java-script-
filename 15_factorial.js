const number = Math.floor(Math.random() * 100);
if (number < 0) {
  console.log("Its a negative number");
} else if (number === 0) {
  console.log("The factorial is 1.");
} else {
  let factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${number} is ${factorial}.`);
}
