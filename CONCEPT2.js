// Rest and spread Operator

const arr1 = ["Ram","Shyam", "Monu", "Dev", "Ronaldo"]
const arr2 = [1, 5, 9, 13, 17]

const combined = [...arr1,...arr2]

//console.log('Combined Array:', combined);


const arrname = ["DEV","RAM","SAM","MONU","SHAAN"]
const arrnum =[20, 40, 60, 80, 100]

const CombinedArr =[...arrname,...arrnum]

//console.log('Combined Array:' ,CombinedArr);

const Avengers = ["spiderman", "Hulk", "IronMan", "Thor"]
const Cartoons = ["Motu & patlu", "Ben10", "Mr.Bean", "Tom & jery"]

const AllStars = [...Avengers,...Cartoons]

console.log('Superstars:',AllStars);




