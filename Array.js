//Array javascript arrays are resizable they cannot be accesed by arbitary strings

let numArr = [1, 2, 3, 4, 5]
let myFavIpl = ["MI", "CSK", "KKR", "SRH", "DC", "RCB"]

const numArr2 = new Array(1,2,3,4,5)
//console.log(numArr[1]);


//console.log(numArr[0]);
//console.log(myFavIpl[2]);

// Array methods
//numArr.push(6)
//numArr.push(7)
//numArr.pop()
//numArr.pop()

numArr.shift()
numArr.unshift(9)
//console.log(numArr);

console.log(numArr.includes(9));



