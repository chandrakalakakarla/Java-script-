function fibonacci(num) {
    if(num<2)
    return num;
    else
  return fibonacci(num - 1) + fibonacci(num - 2);
}
const n = Math.floor(Math.random() * 10);
console.log(`Fibonacci of ${n} numbers`);
for(let i=0;i<n;i++){

console.log(fibonacci(i));
}
