function validatePasswords(passwords) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
    return passwords.filter(password => regex.test(password));
}

const passwords = [
    "Vaishaliii1@",
    "Vaishali",
    "Vaishalithota1#",
    "Vaish1@",
    "Vaishali167",
    "Vaish123#"
];

const validPasswords = validatePasswords(passwords);
console.log(validPasswords);

//2nd question

//3rd question
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        const result = a / b;
        return result;
    } catch (error) {
        return `${error.message}`;
    }
}

console.log(divideNumbers(10, 2));  
console.log(divideNumbers(10, 0)); 
console.log(divideNumbers(0, 3));

//4th question
console.log("4th question")
function checkJson(jstring) {
    try {
        const parsedObject = JSON.parse(jstring);
        return parsedObject;
    } catch (error) {
        console.error("Error: Invalid JSON format.");
        return {};
    }
}

console.log(checkJson( '{"name": "vaishali", "age": 22}')); 
console.log(checkJson('{"name": "vaishali", "age": 22'));
console.log(checkJson('{"name"= "vaishali", "age": 22}'));  
