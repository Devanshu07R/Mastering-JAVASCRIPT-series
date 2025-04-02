const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = myNums.filter((num) => num > 4)
//console.log(newnums);

const MYNUMS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//const NEWNUMS = MYNUMS.filter((num) => num>70)
//console.log(NEWNUMS);

const NEWNUMS = MYNUMS.filter((num) => {
    return num > 55
})
//console.log(NEWNUMS);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newNumbers = myNumbers.map((num) =>{return num + 98})
const newNumbers = myNumbers
              .map((num) => num + 18)
              .map((num)=> num * 45)
              .map((num) => num / 5)
              .filter((num) => num >= 60)



//console.log(newNumbers);

 // reduce

 const ShoppingCart =[
    {
        itemName:"Data Science",
        price: 8999,
    },
    {
       itemName: "AI & ML",
       price: 9999,
    },
    {
        itemName: "Python learning",
        price: 4999,
    },
    {
        itemName: "Master Data Analytics",
        price: 7999,
    }
 ]
 const pricetoPay = ShoppingCart.reduce((acc, item) => acc + item. price, 0)
 console.log(pricetoPay);
 