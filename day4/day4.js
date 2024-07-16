// Activity 1 -> For Loop
// task 1 ->  numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// task 2 -> the multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
}

// Activity 2 -> while loop
// task 3 -> sum of numbers from 1 to 10 using a while loop
let i = 1, sum = 0
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// task 4 -> program to print numbers from 10 to 1 using while loop
i = 10
while (i >= 1) {
    console.log(i);
    i--;
}

// Activity 3 -> Do while loop
// task 5 ->  print numbers from 1 to 5 using do...while loop
i = 1
do {
    console.log(i);
    i++;
} while (i <= 5);

// task 6 -> calculate the factorial of a number using a do..while loop
i = 1
let factorial = 1, num = 5
do {
    factorial *= i
    i++;
} while (i <= num);

console.log(factorial);

/*
Activity 4 -> Nested loops
task 7 -> program to print a pattern using nested for loop
*
**
***
****
*****

*/
for (let i = 0; i < 5; i++) {
    let pattern = ''
    for (let j = 0; j <= i; j++) {
        pattern += '* '
    }
    console.log(pattern);
}

// Activity 5 -> Loop COntrol statements
// task 8 ->  print numbers from 1 to 10 , but skip the numbers 5 using the continue statement
let st = ''
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    st += `${i} `
}
console.log(st);

// task 9 ->  print numbers from 1 to 10 , but stop the loop when the numbers is 7 using the break statement
st = ''
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break
    }
    st += `${i} `
}
console.log(st);