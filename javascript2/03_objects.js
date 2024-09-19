// const myObj = new Object() // singleton object declaration

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {2 : "b", 3 : "c"}
// const obj3 = {obj1, obj2}
// console.log(obj3)
// const  array = [3,4,5,[5,2,3,4]]
// console.log(array.flat(Infinity));

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Dhruv" 
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const match = {
    teams : "Ind vs Aus",
    date : "01 Aug",
    matchVanue : "Narendra Modi Stadium"
}

const {matchVanue : vanue} = match
console.log(vanue)



