
 marvel_heros = ["Iron Man", "HULK", "Thor", "Captain America"]
 dc_heros = ["Spiderman", "Superman", "Batman", "flash"]
marvel_heros.push(dc_heros)

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

//console.log(Array.isArray("Devanshu")); // how isArray works
//console.log(Array.from("Devanshu"));    //how from works in Array
//console.log(Array.from({name:"Devanshu"})); //...................


let score1 = 500
let score2 = 1000
let score3 = 1500

//console.log(Array.of(score1, score2, score3));// how of works


