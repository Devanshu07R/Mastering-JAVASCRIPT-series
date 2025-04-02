// SYNCHRONOUS PROGRAM
// what actually is synchronous.....????
/*Synchronous are the programs which are executed one by one they always wait for the others to exexute in sequential format they don't rush...simple way it means each task wait for the previews one before moving to the other */

console.log('Task-1 completed');
console.log('Task-2 completed');
console.log('Task-3 completed');
console.log('Task-4 completed');
console.log('Task-5 completed');


//ASYNCHRONOUS PROGRAM
//What actually asynchronous program means.....???
/*In asynchronous programs, task can start and continue without waiting for the other program(previews) task to complete. this basically allows multiple operations 
 here no blocking happens(characteristics)*/ 

 console.log('Task-1: Do JAVASCRIPT');
 setTimeout(()=>{
       console.log('Task-2: Do Projects');
       
 },5000)
 
 console.log('it will enhance your confidence level');
 
 setTimeout(()=>{
    console.log('Then it will be crystal clear to deal with the JAVASCRIPT');
    
 },2000)
 
 console.log('Finally JAVASCRIPT completed');
 setTimeout(()=>{
     console.log('Hurray! I did it..');
     
 },1000)