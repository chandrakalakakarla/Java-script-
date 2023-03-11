const start = Math.floor(Math.random()*10);
const end=Math.floor(Math.random()*100);
console.log(`The prime numbers between ${start} and ${end} are:`);

for (let i = start; i <= end; i++) {
    let isPrime = 0;

  for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = 1;
            break;
        }
    }

     if (i > 1 && isPrime == 0) {
        console.log(i);
    }
}