let r1, r2;
let a = 3;
let b = 2;
let c = 4;
let d = b * b - 4 * a * c;
if (d > 0) {
  r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`The roots are ${r1} and ${r2}`);
}
else if (d == 0) {
  r1 = r2 = -b / (2 * a);
  console.log(`The roots are ${r1} and ${r2}`);
}

else {
  let num = (-b / (2 * a)).toFixed(3);
  let dec = (Math.sqrt(-d) / (2 * a)).toFixed(3);
  console.log(
    `The roots of quadratic equation are ${num} + ${dec}i and ${num} - ${dec}i`
  );
}
