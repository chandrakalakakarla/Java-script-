const a =Math.floor(Math.random()*1000);
const b =Math.floor(Math.random()*1000);
const la = a % 10;
const lb = b % 10;
if(la == lb) {
    console.log(`${a}, ${b}  have the same last digit.`);
}
else {
    console.log(`${a}, ${b}  have different last digit.`);
}