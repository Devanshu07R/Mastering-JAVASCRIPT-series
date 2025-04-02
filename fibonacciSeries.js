///////////////////////// loops/////////////////////////
//Fibonacci series

let n=5,a=0,b=1,c=2,d //n=5

for(let i=1; i<=n; i++)//01236
{
   // console.log("Tribonacii series is:"+a);//0
    d= a+b+c;
    a=b;
    b=c;
    c=d;

    
}

// Multiplication table

let num = 10

for(let i=1; i<=num; i++ ){
    console.log(num + "x" + i + "=" + num*i);
    
}