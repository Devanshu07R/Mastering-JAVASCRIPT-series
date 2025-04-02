
const score = 450

if(score>350){

    var power = "Winning"// here var is totally global scope
    //console.log(`There is a chance of ${power}`);
    
}
//console.log(`There is a chance of ${power}`);

const balance = 1000

if(balance < 500)
{
   //console.log("less than 500");
} else if(balance < 750)
{
    //console.log("less than 750");
    
}
else if(balance < 900)
{
    //console.log("less than 900");
    
}

else{
    //console.log("less than 1200");
    
}

const Userlogin = true
const DebitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(Userlogin && DebitCard && 2==2)
{
    // console.log("User is able to buy the course!");
     
}

if(loggedInFromGoogle || loggedInFromEmail ){
//console.log("User successfully logged in!");

}

//Switch case statement..
const month =8
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("default case match ");
        
        break;
}
// Nullish Coalescing Operator (??)
let val1;
val1 = 6 ?? 7

console.log(val1);
