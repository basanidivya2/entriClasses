// **Question 1: Reverse a String**

// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

const input = "hello";
const output = reverseString(input);
console.log(output); // "olleh"

const string = (str)=> {
console.log("string",str);
let reversed = "";
for (i=str.length-1; i>=0; i--) {
    console.log("i",i);
        reversed += str[i];
    }
    return reversed;
}
const input = "hello";
const output = string(input);
console.log("output",output); // "olleh"

// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9

const findMax = (arr)=> {
    console.log("arr",arr)
    let maximum =  arr [0]
    for (let i = 1; i<arr.length; i++) {
        console.log("i",i);
             if (arr[i] > maximum) {
             maximum = arr[i];
         }  
}
return maximum
}
const input = [3, 7, 1, 9, 5];
 const output = findMax(input);
 console.log(output); 

//  **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// **Example:**
// ```javascript
// const inputString = "programming";
// const inputChar = "m";
// const output = countChar(inputString, inputChar);
// console.log(output); // 2

// const countChar = (str)=> {
// console.log("str",str);
// if (str)
// }

// const inputString = "programming";
// const inputChar = "m";
// const output = countChar(inputString, inputChar);
// console.log(output); // 2

