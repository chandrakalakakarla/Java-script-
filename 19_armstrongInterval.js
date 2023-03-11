
const start = Math.floor(Math.random()*100);
const end=Math.floor(Math.random()*1000);
console.log (`Armstrong Numbers between ${start} and ${end} are :`);
for (let i = start; i <= end; i++){

    let sum = 0;
    let temp = i;
    while (temp > 0) {

        let r = temp % 10;
        sum += r*r*r;
        temp = parseInt(temp / 10); 
    }
 
    if (sum == i) {
        console.log(i);
    }
}