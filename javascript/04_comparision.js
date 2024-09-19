// console.log("5">2)  //true
// console.log(true>0)  //true

// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true
// console.log(undefined <==> 0) //false
// console.log(false == 0); //true




//*******************************memory*********************************************** */

/*TWO TYPES OF MEMORY, ONE HEAP AND SECOND STACK
PRIMITIVE DATA WILL STORE IN STACK MEMORY, IN STACK MEMORY ANY CHANGE IN DATA WILL APPLY ON COPY OF ORIGINAL DATA
NON-PRIMITIVE DATA WILL STORE IN HEAP MEMORY, IN HEAP MEMORY ANY CHANGE IN DATA CAN AFFECT ORIGINAL DATA
*/

//for primitive datatype
// let nameOne = 'dhruv'
// let nameTwo = nameOne
// console.log(nameTwo)

// nameTwo = 'dhruv1'
// console.log(nameTwo)
// console.log(nameOne)
//yaha pe ham nameTwo variable ko nameOne ka reference de rahe hai lekin jab ham nameTwo ki value change karte hai to ye nameOne ki value ko change nahi karata kyuki nameTwo ko nameOne ka copy as a refernece milata hai. 


//for non-premitive datatype
let nameObject ={
    id:'12',
    name:'dhruv',
    mail:'dv@gmail.com'
}
console.log(nameObject)
let nameObject2 = nameObject
console.log(nameObject2)
nameObject2.name = 'dhruv1'
console.log(nameObject)
console.log(nameObject2)
//yaha pe hamne nameObject2 ko nameObject2 ka reference diya hai lekin jab ham nameObject2 ki value me koi change karte hai to nameObject ki value bhi change ho jati hai kyuki nameObject2 ko nameObject ke data ka direct refernce milata hai