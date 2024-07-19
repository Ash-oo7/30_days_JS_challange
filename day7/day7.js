// Activity 1: Object creation and accessing properties
// Task 1: Create an object representing a book with properties like title,author,and year,and log the object to the console.
const book = {
    title: 'book 1',
    author: 'me',
    year: 2024,
    "genere is": 'horror'
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(`title is ${book.title} and author of the book is ${book.author}`);
console.log(book["genere is"]);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

book.getDetail = () => `${book.title} by ${book.author}`
console.log(book.getDetail());

//Task-4 : Add a method to the book object that takes parameter (year)and updates the book's year property, then log the updated object.
book.changeYear = (year) => (book.year = year)
book.changeYear(2045)

console.log(book);

//Task-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: 'WorldLibrary',
    books: [
        {
            Title: "To Kill a Mockingbird",
            Author: "Harper Lee",
            Year: 1960
        },
        {
            Title: "nineteen eighty four",
            Author: "George Orwell",
            Year: 1949
        },
        {
            Title: "Pride and Prejudice",
            Author: "Jane Austen",
            Year: 1813
        }
    ]
}

console.log(library);

//Task-6 : Access and log the name of the library and titles of all the books in the library.
console.log(`Welcome to ${library.name}`);

library.books.forEach((book, index) => {
    console.log(`${index + 1} . ${book.Title}`);
});

//Task-7 : Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

book.getTitleYear = function () {
    return `book title is ${this.title} and year is ${this.year}`
}
console.log(book.getTitleYear());

//Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value. 
const bookies = {
    title: 'book 1',
    author: 'me',
    year: 2024,
    "genere is": 'horror'
}
for (const key in bookies) {
    console.log(`${key}: ${bookies[key]}`);
}

//Task-9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.
const allKeys = Object.keys(bookies)
const allValues = Object.values(bookies)

console.log(allKeys);
console.log(allValues);

