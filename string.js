const name = "Nirajan" 
const address = "Harshapur"

// console.log(`My name is ${name} and i am from ${address}`);

const gamename = new String("Nirajan-singh")
console.log(gamename)

console.log(gamename[0]);
console.log(gamename.length);
// console.log(gamename.__proto__);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('a'));

const newString = gamename.substring(0, 4);
console.log(newString);
const anotherString = gamename.slice(3, 10);
console.log(anotherString);


const newone = "  Niraj  "
console.log(newone)
console.log(newone.trim())

const url = "https://nirajan.com/nirajan%20singh"
console.log(url.replace('%','-'));
console.log(url.includes('singh'));

console.log(gamename.split('-'));





