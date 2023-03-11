function guessNumber() {
    const random = 24;
    let number = Math.floor(Math.random()*100);
    while(number !== random) {
        number = Math.floor(Math.random()*100);
    }
    if(number == random) {
        console.log(`The number is ${number}`);
    }

}
guessNumber();