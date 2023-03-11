const number = Math.floor(Math.random() * 10);
let f0 = 0,f1 = 1,f2;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(f0);
  f2 = f0 + f1;
  f0 = f1;
  f1 = f2;
}
