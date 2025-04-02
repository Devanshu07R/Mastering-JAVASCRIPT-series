const arr = [1, 2, 3, 4, 5]

for(const num of arr)
{
  //console.log(num);
  
}

const greeting = "Hello_world!"

for(const greet of greeting)
{
  //console.log(`Each char is ${greet}`);
  
}

//*****************MAP********************* */
//A map is a object that hold the key-value pairs and remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('AU',"Australia")
map.set('UAE', "United Arab Emirates")
map.set('SA', "Saudi Arab")
map.set('SA', "Saudi Arab")

//console.log(map);

for(const [key,value] of map)
{
   // console.log(key, ':-', value);
    
}

const myLanguages = {
     js: 'javascript',
     cpp: 'C++',
     rb : 'Ruby',
     py: 'Python'
     
}
for(const key in myLanguages)
{
    //console.log(key);
    //console.log(myLanguages[key]);
   // console.log(`${key} shortcut is for ${myLanguages[key]}`);
    
    
    
}

const Programs = ["js", "cpp", "py","rb"]

for(const key in Programs)
{
    //console.log(key);
    console.log(Programs[key]);
    
    
}


