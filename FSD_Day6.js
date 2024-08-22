

console.log(countBs("aBBBcc"))

function countChar(str,ch){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch){
            count++;
        }
    }
    return count;
}
function countBs(str){
    
    return countChar("aBBBcc","B");
}
console.log(countChar("aBBBcc","c"))

// function countBs(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="B"){
//             count++;
//         }
//     }
//     return count;
// }