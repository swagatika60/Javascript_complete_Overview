//Array
const arr = [1,2,3,4,5,6]
const name = ["sw","swa"]

const myarr2 = new Array(1,2,3,4)
console.log(arr.length)
console.log(myarr2[0]);

//Array methods

myarr2.push(8)  //aded a new value in an array
console.log(myarr2);
//pop
myarr2.pop()
console.log(myarr2.pop());

//Unshift
//myarr2.unshift(9)//9 will add in the first in an array
//console.log(myarr2);

//shift
myarr2.unshift(8)//in this statement 8 will added on the first
myarr2.shift()//and after that shift will used remove that 8
console.log(myarr2);

//includes-used in js,it can sure that is 9 is included in an array or not
console.log(myarr2.includes(9));
//o/p=false(boolean)


console.log(myarr2.indexOf(9));//o/p:-1
console.log(myarr2.indexOf(19))//o/p:-1
console.log(myarr2.indexOf(3))//o/p:2
//note :if u are askinkg about index like which are exist in this array then o/p will comes as it is.but when u r asking about beyond an existing array then o/p always comes -1 like 9 & 19 cases.bcz 9 & 19 are not exist

const newArr = myarr2.join()//join is used for covert array into string
console.log(myarr2);//o/p:[1,2,3]
console.log(newArr);//o/p:1,2,3
console.log(typeof newArr);//o/p:string

//slice,splice
const myarr3 =[1,2,3,4,5]
console.log("A:",myarr3);

const myn1 =myarr3.slice(1,3)
console.log(myn1);

console.log("D:",myarr3);

/*o/p:
 A:[1,2,3,4,5]
 [2.3]
 D:[1,2,3,4,5]
 */
//Note:that means when i use slice then it wil print number from 1 to n-1 like 1,2(except3)like last number will not included.and also it cannot affect the main array means main array would be as it is

//slice:
console.log("B:",myarr3);
const myn2 = myarr3.splice(1,3)
console.log(myn2);

console.log("c:",myarr3);
/*o/p:
B:[1,2,3,4,5]
[2,3,4]
c:[1,5]
Note:splice will contain element from 1 to 3(3 included),but also it can made changes on the main array,like after using splice 1,2,3 will be removed in to the main array

*/
