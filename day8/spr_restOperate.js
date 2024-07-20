// ACTIVITY THREE : Spread & rest operators
// Task 5 : Use the spread operator to create a new array that includes all the elements of existing array + additional elements & log it to the console
let arr = [1, 2, 3, 4, 5]
let newArr = [...arr, 6, 7, 8]
console.log(newArr);


// Task 6 : Use the rest operator in a function to accept arbitary number of arguments , sum them & return the result
function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1, 2, 3, 4, 5));