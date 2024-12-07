function includes(str, searchStr, fromIndex=0){
    if(fromIndex<0){
        fromIndex = str.length + fromIndex
    }
for(let i=fromIndex;i<=str.length;i++){
 if(str.slice(i,i+searchStr.length) === searchStr){
    return true
 }

}
return false
}

console.log(includes('Dhruv Thummar','Dhruv',7))