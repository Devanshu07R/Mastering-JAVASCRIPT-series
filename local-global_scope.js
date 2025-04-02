
let a = 17000//global scope
if(true)
{
    let a = 67
    const b = 56
    var c = 90

    //console.log("Inner Value:", a);//block scope
    
    
}


//console.log(a);


//console.log(b);
//console.log(c);

function one(){
    const username = "Devanshu"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    console.log(website);
    two()  
}

one()