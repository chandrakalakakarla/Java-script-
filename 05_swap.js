  let num;
  let a =Math.floor(Math.random()*100);
  let b =Math.floor(Math.random()*100);
  console.log(`The value of a is ${a}`);
  console.log(`The value of b is ${b}`);
  num=a;
  a=b;
  b=num;
  console.log("After swapping ");
  console.log(`The value of a is ${a}`);
  console.log(`The value of b is ${b}`);
