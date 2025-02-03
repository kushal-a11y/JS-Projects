const score = 400
console.log(typeof score);

const balance = new Number(400)//returns a wrapper object not a primitive

console.log(typeof balance);//type object

console.log(balance.toString().length);

console.log(typeof balance.toString());//convert nuber to string

console.log(balance.toFixed(2));//precision after decimal point 
//above toFixed is used in E-Commerce gst caluations


const otherNO = 1193.984457

console.log(otherNO.toPrecision(2));//returns String

console.log(typeof otherNO.toPrecision(4));

const hun = 1000000

console.log(hun.toLocaleString('en-IN'));

// Number.MAX_SAFE_INTEGER

// Number.MIN_VALUE

// Number.MAX_VALUE


// console.log(Math.abs(-457867));//Absolute value


// console.log(Math.round(4.9));

// console.log(Math.floor(9.9));

// console.log(Math.ceil(9.9));

// console.log(Math.max(6, 0, 9, 12));

console.log(Math.floor((Math.random()*10) + 1));

const min = 1

const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min))











