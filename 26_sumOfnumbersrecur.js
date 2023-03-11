function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
}
const number = Math.floor(Math.random()*100);

const total = sum(number);
console.log(`The sum of ${number} natural numbers is ${total}`);