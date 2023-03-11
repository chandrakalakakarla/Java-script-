const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);
let lcm=1;
max=num1>num2?num1:num2;

for (let i = max; i>=2; i--) {


    if( num1 % i == 0 && num2 % i == 0) {
       lcm = i;
    }
}

console.log(`LCM of ${num1} and ${num2} is ${lcm}.`);