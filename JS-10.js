//const DevUser = new Object()//singleton object
const DevUser = {}// non-singleton object

DevUser.id = "1234dev"
DevUser.name = "Ronaldo"
DevUser.isLoggedIn = false
//console.log(DevUser);

const regularUser ={
    email: "ronaldo@portugal.com",
    fullname: {
        userfullname: {
            firstname: "Cristiano",
            lastname: "Ronaldo"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname.lastname);

const Obj1 = {1:"Dev", 2:"Ronaldo", 3: "Anuj", 4:"Messi"}
const Obj2 = {5:"Superman", 6:"Batman", 7:"Hulk", 8:"Ben10"}

 //const Obj3 = {Obj1 , Obj2}
 //const Obj3 = Object.assign({}, Obj1, Obj2)//target , source
 //console.log(Obj3);

 const Obj3 = {...Obj1,...Obj2}
 //console.log(Obj3);
 

 const ArrName1 = {1:"DSA", 2:"C++", 3:"JAVA", 4:"Python", 5:"Go"}
 const ArrName2 = {6:"web", 7:"app", 8:"backend", 9:"frontend"}

 //const ArrName3 = {...ArrName1,...ArrName2}
 const ArrName3 = Object.assign({},ArrName1, ArrName2)
 console.log(ArrName3);
 
 