// Activity 1: Function Declaration
// Task 1: Write a function in javascript to check if a number is even or odd and log the result to the console.
function eveOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    }
    else
        console.log(num + " is odd.");
}

eveOrOdd(5)
eveOrOdd(10)

// Task 2: Write a function to calculate the square of a  number and return a result
function sqr(num) {
    return num * num
}

console.log(`The sqare of number is ${sqr(10)}`);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console 

const max = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1, " is greater");
    }
    else if (num1 < num2) {
        console.log(num2, " is greater");
    }
    else {
        console.log("Both are equal");
    }
}

max(4, 5)
max(10, 5)

// Task 4: Write a function expression to concatenate two strings and return the result
const concat = function (str1, str2) {
    return str1 + str2
}

console.log(concat("I am", " developer"))


// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// Type 1:Implicit return
const sum = (a, b) => a + b
console.log('sum of numbers is ', sum(6, 9));

// Type 2:Explicit return
const sumofnum = (a, b) => {
    return a + b
}
console.log('sum of numbers is ', sumofnum(6, 4));

// Task 6: Write an arrow function to check if a string contains a special character and return a  boolean value
const isSpecialChar = (str) => {
    const regex = /[!@#$%^&*(),.?":{}|<>]/;
    return regex.test(str)
}
console.log(isSpecialChar('helloworld !'));
console.log(isSpecialChar('helloworld '));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function  that takes two parameters and returns their product. Provide a default value for a second parameter.
const product = (num1, num2 = 10) => {
    return num1 * num2
}
console.log(product(4));

// Task 8: Write a function that has a function name and age and returns a greeting message. provide a default value for the age
const greet = (name, age = 20) => {
    return `hi ${name}, you are ${age} years old.`
}

console.log(greet("Sarthak"));
console.log(greet("Riya", 19));

// Activity 5: Higher-Order Functions-> A function that takes one or more functions as an argument or returns a function as a result.
// Task 9: Write a higher order function that takes a function and a number and calls the function that many times

function repeatFn(fn, times) {                    // higher order
    for (let i = 0; i < times; i++) {
        fn()
    }
}

function hi() {                                  //callback
    console.log('hello');
}

repeatFn(hi, 5)

// Task 10: Write a higher order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.
function high(fn1, fn2, val) {
    let result = fn1(val);
    return fn2(result)
}

let function1 = (x) => {
    return x * 2
}

let function2 = (x) => {
    return x + 2
}

console.log(high(function1, function2, 5)); 
