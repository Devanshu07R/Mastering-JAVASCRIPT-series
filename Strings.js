// content-5 Strings

let name = "Devanshu"
let linkedinConnections = 1019

console.log(`Hello my name is ${name} and I have ${linkedinConnections} connections in my linkedin account`);

const goodName = new String('Devanshu')

console.log(goodName[0]);
console.log(goodName.__proto__);
console.log(goodName.length);
console.log(goodName.toUpperCase());
console.log(goodName.charAt(3));
console.log(goodName.indexOf('u'));

const newString = goodName.substring(-8, 4)
console.log(newString);

const anotherString = goodName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    Devanshu     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://devanshu.com/devanshu%20dasgupta"
console.log(url.replace('%20', '-'));

console.log(url.includes('anuj'));

console.log(goodName.split('-'));


let PlayerName = "Cristiano Ronaldo"
let goalScored = 916

console.log(`The greatest player of all time is ${PlayerName} he secured ${goalScored} goals in his Carrer,he is a G.O.A.T`);




