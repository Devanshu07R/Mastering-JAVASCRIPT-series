// Destructing
// Destructing allows you to extract the values from the objects or aarays into distinct variables..

// const person ={name: 'Devanshu', age: 20, job:'Software Engineer'}
// const {name,age,job} = person

// console.log(`${name} is ${age} years old and he is working as a role of ${job} in Facebook`);

const Wrestler1 = {name:'Roman Reings', ringName:'BigDog', heelcharacter: 'Tribal Chief', TitleHold: 1316}
const {name, TitleHold, ringName, heelcharacter } = Wrestler1

console.log(`${name} is also known by his ring name ${ringName}, he is one an only the ${heelcharacter} his longest reign is ${TitleHold} one of the biggest record holder in the wrestling sports entertainment!`);



