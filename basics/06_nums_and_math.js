const score=400;

console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber=123.896

console.log(otherNumber.toPrecision(3))// precison helps to find the nearest number and the priority is left to right

const hundred=100000
console.log(hundred.toLocaleString('en-IN')); //to find the numbers in decimal value use toLocaleString

//+++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++



console.log(Math);
console.log(Math.abs(-4)); // to make absolute values -4==+4
console.log(Math.round(4.6))// to round off numbers
console.log(Math.floor(4.7))// to round of to the smaller number
console.log(Math.ceil(4.1))// to round of to the larger number
console.log(Math.max(4,3,5,3))// max number
console.log(Math.random())// random value is between 0-1 always decimal
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1) + (max-min+1)+min))

// basically if u have to find bet
