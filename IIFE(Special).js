// IIFE
//immmediately invoked function expression..

// Global scope ke pollution se problem hoti hain kai bar toh us global scope ke jo variables hain unke pollution ko hatane ke liye IIFE ka use kiya...

(function DocumentFetch(){
   console.log(`DOCUMENT passed To Database`); 
})();

((name)=>{
    console.log(`DATABASE Connected to the ${name}`);
    
})('Devanshu');


((DocumentId) => {
    console.log(`Your ID is:${DocumentId}`);
})("10522310689");

(function wresltlername(){
    console.log(`The ROMAN REINGS`);
    
})();

((Wrestlername) =>{
    console.log(`The one and only The Tribal chief The head of the table The OTC ${Wrestlername}`);
    
})(`Roman Reings`);