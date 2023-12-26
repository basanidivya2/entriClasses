
//1. Sum of Natural Numbers:
//Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

const n = 7;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum); 

//2. Factorial of a Number:
//Write a program to calculate the factorial of a given number `n` using a `for` loop.

const z = 4;
let factorial = 1;
for (let i = 1; i<=z; i++) {
    factorial *= i;
}
console.log(factorial);

// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.
const a = 9;
let first = 0, second = 1, next;
console.log(first); //0
console.log(second); //1
for (let i=2; i< a; i++) {
next = first + second;
console.log(next);
first = second;
second = next;
}

//4. Print Multiplication Table:
//Write a program to print the multiplication table of a given number `n` using a `for` loop.
const b = 6;
for (let i = 1; i<=10; i++) {
    console.log (`${b} × ${i} = ${b*i}`);
}
//5. Reverse a String:
//Write a program to reverse a string using a `for` loop.
const input = "Divya";
let reversed = "";
for (let i = input.length-1; i>=0; i--) {
    reversed += input[i];
}
console.log(input);
console.log(reversed);

//6. Prime Number Check:
//Write a program to check if a given number `n` is prime using a `for` loop.
const c = 5;
let isPrime = true;
for (let i = 2; i<=Math.sqrt(c); i++) {
    if (c % i === 0) {
        isPrime = false;
        break;
}
}
console.log(isPrime);
//7. Count Digits in a Number:
//Write a program to count the number of digits in a given number `n` using a `for` loop.
const d = 12345;
let count = 0;
let temp = n;
while (temp !== 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log(count); // 5

//8. Print Pattern:
//Write a program to print a pattern of stars using a `for` loop.
const rows = 5;

for (let i = 1; i<= rows; i++) {
    let pattern = "";
    for (let j = 1; j<=i; j++) {
        pattern += "*"; 
    }
    console.log(pattern);
}
//9. Find Largest Element in an Array://
//Write a program to find the largest element in an array using a `for` loop.
const numbers = [5,4,9,11,13];
let largest = numbers [0];
for (let i = 1; i<= numbers.length; i++) {
    if (numbers[i] >largest) {
largest = numbers[i];
    }
}
console.log(largest);

//10. Reverse an Array:
//Write a program to reverse the elements of an array using a `for` loop.
const inputArray = [1,2,3,4,5,6];
const reversedArray = [];
for (let i = inputArray.length-1; i>=0; i--) {
    reversedArray.push(inputArray[i]);
}
console.log(reversedArray);




