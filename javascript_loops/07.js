const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval

// }, 1)

const myTotal = myNums.reduce( (acc, curr) => acc+curr,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "javascript course",
        price : 100
    },
    {
        itemName : "python course",
        price : 199
    },
    {
        itemName : "java course",
        price : 500
    },
    {
        itemName : "data science course",
        price : 300
    },
    
]

const totalCartPrice = shoppingCart.reduce( (acc,curr) => acc+curr.price,0)
console.log(totalCartPrice);
