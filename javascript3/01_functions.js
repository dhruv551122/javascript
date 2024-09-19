// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(10,25)
// console.log("Result:",result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("Dhruv")
    return number1 + number2
}
result = addTwoNumbers(5,7)
// console.log(result);

function loginUserMessage(username){
     if(!username){
        return console.log("Please enter a username")
     }
     return console.log(`${username} just logged in`)
}
// loginUserMessage("Dhruv")


function calculateCartPrice(...num1){
    return num1 
}
// console.log(calculateCartPrice(21));
// console.log(typeof calculateCartPrice(21));

function getValueFromObject(anyObject){
    return `uasrname is ${anyObject.username} and age is ${anyObject.age}`
}
// console.log(getValueFromObject({
//     username:"Dhruv",
//     age:20
// }))

function secondValuOfArray(anyArray){
    return anyArray[1]
}
console.log(secondValuOfArray([20,2,23,42]));




