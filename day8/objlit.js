// ACTIVITY FIVE : Enhanced Object Literals

// Task 8 : Use enhanced object literals to create an object with method & properties & log it to the conolse

let Title = "To Kill a Mockingbird"
let Author = "Harper Lee"

const book = {
    Title,
    Author,
    fn() {
        return `Title of the book is ${Title} and it is written by${Author}.`
    }
}
console.log(book);
console.log(book.fn());

// Task 9 : Create an object with computed property names based on variables & log the object to the console
let game = 'Game'
let type = 'Game Type'

const obj = {
    [game]: 'football',
    [type]: 'outdoor'
}
console.log(obj);