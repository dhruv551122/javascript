const array = new Array(1,2,3,4)
array.push(54)
console.log(array)
// console.log('A',array)
// console.log(array.slice(2,3))
// console.log('B',array)
// console.log(array.splice(2,3))
// console.log('C',array)


// let score1 = 40
// let score2 = 50
// let score3 = 23
// let name = 'dhruv'
// let all_score = [20,30,[45,34,50]]
// console.log(Array.isArray(all_score));
// console.log(Array.from('234'))
// console.log((Array.of(score1,score2,score3,name,all_score)).flat(Infinity))

const set = new Set(["dhruv","Het","dhruv","Dhruv"])
set.add(6)
console.log(typeof set)
const newArray = Array.from(set)
console.log(typeof newArray)


const mySet1 = new Set();

console.log(mySet1.add(1)) // Set(1) { 1 }
console.log(mySet1.add(5)) // Set(2) { 1, 5 }
console.log(mySet1.add(5)) // Set(2) { 1, 5 }
console.log(mySet1.add("some text")) // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
console.log(typeof mySet1.add(o))

console.log(typeof mySet1.add({ a: 1, b: 2 }))