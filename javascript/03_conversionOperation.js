let number = "33zds"
let score = 33
console.log(typeof number)
console.log(typeof score)

let number2 = Number(number)
let score2 = String(score)

console.log(typeof number2)
console.log(typeof score2)


// "33" => 33
// "33asds" => NaN
// true => 1; false => 0
// null => 0

let marks = null
let marks2 = Boolean(marks)
console.log(marks2)


// *************************Operations********************************

/*primitive datatypes
  boolean, string, number
*/

/*non-primitive datatypes
  objects, function, array
*/
console.log(3 + 4 * 4 % 5)
