const user = {
    username : "Dhruv",
    age : 20,
    welcomeMessage : function(){
        console.log(`Hello! ${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "dhruv"
// user.welcomeMessage()

// function one(){
//     let username = "dhruv"
//     console.log(this.username)
// }
// one()

// const one = function(){
//     let username = "dhruv"
//     console.log(this.username)
// }
// one()

const one = () => {
    let username = "Dhruv"
    console.log(this);
}
// one()

// const addTwo = (num1, num2) => {
//    return num1 + num2
// }
// console.log(addTwo(4,5));

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(4,6))

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(4,6))

