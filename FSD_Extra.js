function findMin(a,b){  //to find minimum number between given two numbers
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

console.log(findMin(10,-10))
console.log(findMin(2,6))


console.log("Even or Not");
function isEven(num){   //to find a number is even or not with recursion
    if (num < 0) {           
        num = Math.abs(num);
    }
    if(num==0){
        return true;
    }
    else if(num==1){
        return false;
    }
    return isEven(num-2)
}

console.log(isEven(75));
console.log(isEven(76));
console.log(isEven(-1));
console.log(isEven(-2));