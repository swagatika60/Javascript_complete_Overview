
const name = "swagatika"
const repoCount = 50

// console.log(name + repoCount + " value") //old method

console.log(`Hello My ${name}.and my repo count is ${repoCount}.`)

const gameName = new String('swagatika')

console.log(gameName.length)
console.log(gameName.anchor());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

console.log(gameName.small())


 //substring
 //----------
const newstring = gameName.substring(0,4)

console.log(newstring)

//.slice(it allows negative value)

const another = gameName.slice(-4,3)

console.log(another);


