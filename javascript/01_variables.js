const accountId = 123442
let accountName = 'Dhruv'
var accountCity = 'Rajkot'
accountEmail = 'dhruv@gmail.com'
let accountPass; 
// accountId = 12222  const value can not be changed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountName = 'Het'
accountCity = 'Gondal'
accountEmail = 'dv@gmail.com'

console.table([accountName, accountCity, accountEmail, accountPass])