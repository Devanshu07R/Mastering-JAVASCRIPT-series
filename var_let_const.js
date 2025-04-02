// var, let, const ki kahani in javascript
//keep a habit of not to use var because of the issue in the functional scope and block scope..

const accountID = 80105223106
let accountEmail = "devanshu14@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;
let personCourse = "B.Tech(CSE)"

// now changing the variable data..
//accountID = 80105223117  //const variable can't be changed
//console.log(accountID);

accountEmail = "jhaAnuj@google.com"
accountPassword = "54321"
accountCity = "Raipur"
personCourse = "Mechanical Engineer"

console.log(accountID);//

console.table([accountEmail, accountPassword, accountCity, accountState, personCourse])



