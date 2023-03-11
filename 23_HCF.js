let hcf;
const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);

for (let i = 1; i <= num1 && i <= num2; i++) {


    if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);