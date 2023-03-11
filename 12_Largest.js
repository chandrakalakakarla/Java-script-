const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);
console.log(`The largest number among ${a},${b} and ${c} is `);
if (a > b && a > c) console.log(a);
else if (b > a && b > c) console.log(b);
else console.log(c);
