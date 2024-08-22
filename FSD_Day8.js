//1st question
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce(function(acc, curr) {
    return acc.concat(curr);
}, []);

console.log(flattenedArray);


//2nd question

function loop(value, test, update, body) {
    while (test(value)) { // Check the test function with the current value
        body(value);      // Execute the body function with the current value
        value = update(value); // Update the value using the update function
    }
}

loop(3, function(n) { return n > 0; }, function(n) { return n - 1; }, console.log);

//3rd question
//using loop
console.log("every function using loop");
function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], function(n) { return n < 10; }));
console.log(every([2, 4, 16], function(n) { return n < 10; }));
console.log(every([], function(n) { return n < 10; }));

//using some function
console.log("every function using some");
function every(array, test) {
    return !array.some(function(element) {
        return !test(element);
    });
}
console.log(every([1, 3, 5], function(n) { return n < 10; }));
console.log(every([2, 4, 16], function(n) { return n < 10; }));
console.log(every([], function(n) { return n < 10; }));