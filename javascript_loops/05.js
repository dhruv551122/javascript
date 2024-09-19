const arr = [1,2,3,4,5,6]

// arr.forEach( function (item) {
//     console.log(item)
// })

// arr.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)

// arr.forEach( (val, i, arra) => {
//   console.log(val, i, arra);
// })

const coding = [
    {
        languageName : "javascript",
        laguageFileExtention : "js"
    },
    {
        languageName : "java",
        laguageFileExtention : "java"
    },
    {
        languageName : "python",
        laguageFileExtention : "py"
    }
]

coding.forEach( (val) => {
    // console.log(`${val.laguageFileExtention} is extention of ${val.languageName}`);
})

const myNums = [1,2,3,4,5,6,7,8]
// const newNums = myNums.filter( (num) => num<=5)
// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7,8]
// const newNums = myNums.filter( (num) => {
//     return num>4
// })
// console.log(newNums);

const nums = []
myNums.forEach( (num) => {
    if(num>4){
        nums.push(num)
    }
})
console.log(nums);


