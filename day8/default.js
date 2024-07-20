// ACTIVITY FOUR : Default Parameters

// Task 7 : Write a function that takes two parameters & return their product , the second parameter should have a default parameter of 1

function product(a, b = 1) {
    return a * b
}

console.log(product(3, 5));
console.log(product(3));