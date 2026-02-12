const score =50
// console.log(score)

const number = new Number(100)
console.log(number);

//convert to string
console.log(number.toString().length)

//for fixed like 100.00/100.0
console.log(number.toFixed(2));

//precision
const otherNumber = 23.899787
console.log(otherNumber.toPrecision(4));


//tolocalstring like:10,00,000
const Num = 1000000
console.log(Num.toLocaleString("en-IN"));//for india format


//Maths
//---------
console.log(Math.abs(4));
console.log(Math.round(4.8));
console.log(Math.round(4.2));
console.log(Math.ceil(5.4));//always give upper number
console.log(Math.floor(4.8));//always give smaller value
console.log(Math.random());
console.log((Math.random() * 10) + 1);
///
const max= 10
const min=20
console.log((Math.random()*(max-min+1))+min);








