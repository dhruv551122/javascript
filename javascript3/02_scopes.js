// const a = 30
// let b = 34
// var c = 29
// if(true){
//     const a = 10
//     let b = 2
//     var c = 3
//     console.log("Inner a : ",a)
//     console.log("Inner b : ",b)
//     console.log("Inner c : ",c)
// }

// console.log("Outer a : ",a)
// console.log("Outer b : ",b)
// console.log("Outer c : ",c)

function one(username){
    const age = 20
   function two(){
    const profession = "student"
    console.log(username)
    console.log(age)
   }

//    console.log(profession);
//    two()
}
one("dhruv")


