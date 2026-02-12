let myDate = new Date()
console.log(myDate.toString());//universal time
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());

console.log(typeof myDate);

let createDate = new Date(2026,0,12)// bys=default jan starts from 0
console.log(createDate.toDateString());


let createDate1 = new Date("01-04-2026")
console.log(createDate1.toLocaleDateString());

let Datenow = Date.now()
console.log(Datenow);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




