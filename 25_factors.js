const num = Math.floor(Math.random()*100);

console.log(`The factors of ${num} are:`);

for(let i = 1; i <= num; i++) {


    if(num % i == 0) {
        console.log(i);
    }
}