function endsWith(str, searchStr, endIndex = str.length-1){
if(endIndex<0){
    endIndex=str.length + endIndex
}
if(str[endIndex]===searchStr){
    return true
}
return false
}

str='dhruv'
console.log(endsWith('Dhruv Thummar','u',3));
