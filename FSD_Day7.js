function generateArray(start,end,step){
arr=[]
while(start<=end){
    arr.push(start);
    start+=step;
}
console.log("Sum of the array");
console.log(sumArray(arr));
return arr
}

console.log(generateArray(1,10,2));

function sumArray(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum
}
//---------------------------------------------------------------------------------------------------
// Reverse an Array
console.log("Reverse Array")
function reverseArray(arr){
    res=[]
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    return res;
}
console.log(reverseArray([1,2,3]));

//Reverse Array In Place
console.log("Reverse Array In place")
function reverseArrayInPlace(arr){
    
let leftIndex = 0;
let rightIndex = arr.length - 1;

while (leftIndex < rightIndex) {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
}
}
console.log(reverseArray([11,12,13]));

//-----------------------------------------------------------------------------------------------------------------
//3rd question

// Function to convert an array to a list
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

// Function to convert a list to an array
function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

// Function to prepend an element to a list
function prepend(value, list) {
    return { value: value, rest: list };
}
// Function to get the nth element from a list
function nth(list, n) {
    let current = list;
    for (let i = 0; i < n; i++) {
        if (current == null) return undefined; // Return undefined if n is out of bounds
        current = current.rest;
    }
    return current ? current.value : undefined; // Return the value at nth position or undefined
}

console.log("Array to List")
console.log(arrayToList([10, 20])); 
console.log("List to Array")
console.log(listToArray(arrayToList([10, 20, 30]))); 
console.log("Prepend")
console.log(prepend(10, prepend(20, null))); 
console.log("Find nth element")
console.log(nth(arrayToList([10, 20, 30]), 1));