// MAP & Filter
// Map creates a new array by transforming each element

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Multiplication_of_2 = numbers.map(num => num*2)
//console.log('Multiplication_of_2',Multiplication_of_2);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Multiplication_of_3 = numbers.map(num => num * 15)

console.log('Multiplication_of_3', Multiplication_of_3);


// filter
const CheckEven = numbers.filter(num => num % 2 == 0)
console.log('Even',CheckEven);
