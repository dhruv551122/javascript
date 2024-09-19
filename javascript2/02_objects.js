const mySym = Symbol("key")
const myObj = {
    name : "Dhruv",
    Age : 20,
    email: "dv@gmail.com",
    [mySym]: "key1",
    mobile:"12122901",
    location:"Gujarat",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "thursday"]
}

// console.log(myObj["Age"])
// console.log(myObj[mySym]);


myObj.name = "dhruv"
console.log(myObj)

Object.freeze(myObj.email) //freeze object so no one can change it
myObj.mobile = 232323
myObj.email = "dhruv@gmail.com"
console.log(myObj)

myObj.dhruv = function(){
    console.log(`hello ${this.name}, Welcome`)
} 
console.log(myObj.dhruv())
