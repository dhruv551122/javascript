// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

// const array = []
// if(array.length){
//     console.log("Truthy and array is not empty")
// }
// else{
//     console.log("Falsy and array is empty")
// }

const object = {}
if(Object.keys(object).length){
    console.log("Truthy and object is not empty");
}
else{
    console.log("Falsy and object is empty");
}

// Nullish Coalecing Operator (??): null undefined
let val
// val = null ?? undefined ?? 10 ?? NaN
val = NaN ?? 10

// console.log(val)

// Terniary Operator
// condition ? true : false

const batPrice = 3000
batPrice <= 2500 ? console.log("Price in budget") : console.log("Price is out of budget")

