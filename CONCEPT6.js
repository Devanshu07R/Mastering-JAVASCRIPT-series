 
 // they are bsically used for handling the asynchronous operations
 const fetchData = () => {
    return new Promise(resolve =>{
        setTimeout(()=> resolve('Succesfully Data Fetched!'), 2000);
    });
 };

 async function getData(){
    console.log('fetching data......');
    const result = await fetchData();
    console.log(result); 
    
 }
 getData();