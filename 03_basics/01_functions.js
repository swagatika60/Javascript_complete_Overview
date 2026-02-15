//Basics
/*

function sayMyName(){
console.log("S");
console.log("w");
console.log("a");

}
// sayMyName:this is reference
sayMyName()//its called execution
*/
/*
//addTwoNmuber
function addTwoNmuber(num1,num2){
    console.log(num1 + num2);
    
}

// addTwoNmuber(3,5) //Its also  possible to call
const result = addTwoNmuber(3,5)//its also give result
console.log("Result :",result);//o/p:undefined(means its creates the problem)

*/

function addTwoNmuber(num1,num2){
    // let result =num1 + num2
    // return result
    return num1 + num2
}
const result =addTwoNmuber(3,5)

// console.log("Result:",result);



function loginUserMessages(Username,num){
    if(Username == undefined){ 
    //if(!Useername)//same meaning
        //console.log("Plz enter a username");
        return
    }
return `${Username} just logged in ${num}`
}
// console.log(loginUserMessages("swagatika",14))//o/p:swagatika just logged in 14
// console.log(loginUserMessages());o/undefined just logged in 14

//console.log(loginUserMessages());


// Note:if(!username)=if(username == undefined)   same meaning


function login(name = "swa"){
    return `${name} logged in`
}
//console.log(login());//o/p:swa logged in
//console.log(login("Swagatika"))//o/p:Swagatika logged in

//1.
function calculateCartPrice(num1)//
{
    return num1

}
//console.log(calculateCartPrice(200, 300, 500));//o/p:200

//2.
function calculateCartPrice(...num1)//
{
    return num1

}
//console.log(calculateCartPrice(200, 300, 500,600));//o/p:[ 200, 300, 500, 600 ]

//3.
function calculateCartPrice(val1,val2,...num1)//
{
    return num1

}
//console.log(calculateCartPrice(100, 200,300,4000));//o/p:[ 300, 4000 ]

//1.
const user ={
    username : "Swagatika",
    price:99
}

function handelObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handelObject(user)


//2.another method of passing value in an object 
const user1 ={
    // username : "Swagatika",
    // price:99
}

function Object(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
Object({
    username:"swag",
    price:100
})


//3.
const myNewArray = [200, 300, 400, 5000]
 
function returnSeecondValue(getArray){
    return getArray[1]
}
// console.log(returnSeecondValue(myNewArray));//o/p:300
//console.log(returnSeecondValue([200, 300, 400, 5000]))//o/p:300
