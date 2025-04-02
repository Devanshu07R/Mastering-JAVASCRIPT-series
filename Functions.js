// functions....in Javascript

function MyName(){
    console.log("R");
    console.log("O");
    console.log("N");
    console.log("A");
    console.log("L");
    console.log("D");
    console.log("O");
}

//MyName()// "()"execution process

function AddTwoNumbers(number1, number2){ //parameters

    //console.log(number1 + number2);
    //let result = number1 + number2
    //console.log("Devanshu");
    
    return number1 + number2
    
}
const result = AddTwoNumbers(9,null)//arguments value passed
//console.log("Result:" , result);


//function calculateCartPrice( price1,price2){

   // console.log(price1 + price2);
    

//calculateCartPrice(45,89)

function CalculateCartPrice(val1, val2, val3, val4,...num1){ //...rest operator
    return num1
}
//console.log(CalculateCartPrice(1000,2000,3000,4000,5000,5,4));

const user = {
    username: "Devanshu",
    price: 599
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({
    username: "SACHIN",
    price: 899
})

const MynewArr = [200,500,600,455]

function returnSecondValue(){
    return getArr[1]
}
//console.log(returnSecondValue(MynewArr));
console.log(returnSecondValue([200, 500, 600, 455]));




