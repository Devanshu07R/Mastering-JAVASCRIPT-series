// Arrow function and "This keyword"
// myth: Arrow function ke andar this keyword nahi hota
// current values jo hain variables main uski baat karta hain...this current context
//  browser ke andar joglobal object hain - window object
const user = {
    username: "Devanshu",
    age: 20,
    price: 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "Ronaldo"
// user.welcomeMessage()

//console.log(this);

// function chai()
// {
//     let username = "DEV"
//     console.log(this.username);
    
// }
// chai() this keywords doesn't work in function, it works in objects

const chai = () => {
    let username = "DEV"
    console.log(this.username);
    
}

//chai()// myth


//********************************ARROW  => Function**************************************8

const ProductNum = (num1, num2) => {
 return num1 * num2

}
//console.log(ProductNum(8,9));

const addTwo = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)

console.log(addTwo(8,990));
console.log(addTwo2(8,90));


