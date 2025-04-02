// Objects in Javascript.......

const mySym = Symbol("key1")

const JsUser = {
    name: "Devanshu",
    "full name": "Dasgupta",
    fullName: "Dasgupta",
    [mySym]: "mykey1",  // interesting interview question
    age: 20,
    location: "Dubai",
    email: "devanshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday","Wednesday","Sunday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Anuj@google.com"
//Object.freeze(JsUser)
JsUser.email = "Devanshu@meta.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello I'm Cristiano Ronaldo");
    JsUser.greetingTwo = function(){
        console.log(`Hello I'am ${this.name} ${this.fullName}`);
        
    }
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







