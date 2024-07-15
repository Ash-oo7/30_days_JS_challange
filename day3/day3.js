// task 1: program to check if a number is positive, negative or zero, and log the result

const checkNum = (num) => {
    if (num === 0) {
        return `${num} is neither positive nor negative.`
    }
    else if (num < 0) {
        return `${num} is negative number.`
    }
    else
        return `${num} is positive number.`
}

console.log(checkNum(0));
console.log(checkNum(100));
console.log(checkNum(-40));

// task 2: program to check if a person is eligible to vote and log the result

const isVoter = (age) => {
    if (age > 0) {
        if (age >= 18) {
            return `Congrates, your age is ${age}. You are eligible for voting.`
        }
        else
            return `Sorry, your age is ${age}. You are not eligible for voting.`
    }
    return `Do you even exist ?`
}

console.log(isVoter(21));
console.log(isVoter(5));
console.log(isVoter(-21));

// task 3: program to find the largest of three numbers.
const largeNum = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return `${num1}`
    }
    else if (num2 > num1 && num2 > num3) {
        return `${num2}`
    }
    else
        return `${num3}`
}

console.log(largeNum(23, 45, 78));

// task 4: program to determina the day of week based on number using switch case and log the result

const day = (num) => {
    switch (num) {

        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid";
    }
}

console.log(day(1));
console.log(day(10));

// task 5: program that uses switch case to assign the grade ("A","B","C","D","E") based on score and log the result

const grade = (num) => {
    switch (true) {
        case num <= 49:
            return "F";
        case num <= 59:
            return "E";
        case num <= 69:
            return "D";
        case num <= 79:
            return "C";
        case num <= 89:
            return "B";
        case num <= 100:
            return "A";
        default:
            return "Invalid";
    }
}

console.log(grade(74));

// task 6: program to use the ternary operator to check if number is even or odd and log the result

const evenOrOdd = (num) => {
    return (num % 2 == 0) ? `${num} is even` : `${num} is odd`;
}

console.log(evenOrOdd(44));

// task 7: program to check if a year is leap and log the result
const leap = (num) => {
    if (num % 4 == 0 && num % 100 == 0) {
        if (num % 400 == 0) {
            return `${num} is a leap year.`
        }
        else
            return `${num} is not a leap year.`
    }
    else if (num % 4 == 0) {
        return `${num} is a leap year.`
    }
    else
        return `${num} is not a leap year.`
}

console.log(leap(1900));