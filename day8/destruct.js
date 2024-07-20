// ACTIVITY TWO : Destructuring
// Task 3 : Use Array Destructuring to extract the first & second element from the array of numbers & log it to the console
let arr = [1, 2, 3, 4, 5]

const [first, second] = arr
console.log(first);
console.log(second);

// Task 4 : Use Object Destructuring to extract the title & author from the book object & log it to the console
const book = {
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Year: 1960
}

const { Title, Author } = book
console.log(Title);
console.log(Author);