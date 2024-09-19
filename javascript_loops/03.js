// for of

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

const name = "Dhruv Thummar"
for (const greet of name) {
    if(greet==" "){
        continue
    }
    // console.log(greet);
    
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key, ':' ,value)
}

const games = {
    game1 : 'Cricket',
    game2 : 'Football'
}

// for (const [key,value] of games) {
//     console.log(key, ':', value);
// }

