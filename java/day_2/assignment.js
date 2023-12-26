//1)Write a JavaScript function to extract a specified number of characters from a string.
//Test Data :
//console.log(truncate_string("Robin Singh",4));
//"Robi"
const name1 = 'Robin Singh';
const name2 = name1.slice(0,4);
console.log(name2);

//2)Write a JavaScript function to convert a string into abbreviated form.
//Test Data :
//console.log(abbrev_name("Robin Singh"));
//"Robin S."
//function abbrev_name(name) {
    function abbrev_name(name) {
        const parts = name.split(" ");
        return parts[0] + " " + parts[1][0] + ".";
    }
    console.log(abbrev_name("Basani Divya"))
    
//3)Write a JavaScript function that hides email addresses to prevent unauthorized access.
//Test Data :
//console.log(protect_email("robin_singh@example.com"));
//"robin...@example.com"
let Email = 'basanidivya2@gmail.com';
let splitemail = Email.split("@");
console.log(splitemail);
let hideemail = splitemail[0].slice(0,6) + ".....@" + splitemail[1];
console.log(hideemail);

//4)Write a JavaScript function to capitalize the first letter of a string.
//Test Data :
//console.log(capitalize('js string exercises'));
//"Js string exercises"
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('basanidivya'));


//5)Write a JavaScript function to uncapitalize the first character of a string.
//Test Data :
//console.log(Uncapitalize('Js string exercises'));
//"js string exercises"
function uncapitalize(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(uncapitalize('BASANIDIVYA'));

//6)Write a function truncateText that takes a string and a maximum length as input and returns a
//truncated version of the string if it exceeds the maximum length, adding "..." at the end.
const namep = 'basanidivyarao';
const truncate_string = namep.slice(0,6);
const last_name = truncate_string + "........";
console.log(last_name)

//7)console.log(truncateText("This is a long sentence.", 10));
// Output: "This is a..."
//console.log(truncateText("Short text.", 15));
// Output: "Short text."
let text = "basani divya Rao";
let truncate_text = text.slice(0,10);
console.log(truncate_text + "......")
let text2 = "divya";
let truncate_text2 = text2.slice(0,15);
console.log(truncate_text2 + ".")
// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and
// prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good afternoon" for
// hours 12-17, and "Good evening" for hours 18-23.
function greetTimeOfDay (hour) {

if (hour>=6 && hour<=12) {
    console.log("Good Morning");
}
else if (hour>=12 && hour<=17) {
    console.log("Good Afternoon");
}
else (hour>=18 && hour<=23) 
    console.log("Good Evening")
}
//  9)Leap Year Check
//  Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is
//  divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap
//  year.
function LeapYear(year){
    if ((year%4==0 && year%100!=0) || year%400==0) {
    return 'leap Year';
}
else{
    return 'not a leap year';
}
}
let year = 2000
console.log(LeapYear(year));

// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the
// number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
function p(x){
    if (x>0){
        return 'positive';
    }
    else if (x<0){
        return 'negative';
    }
    else{
return 'zero';
    }
}
let x = 0
console.log(p(x));

// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their
// corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79,
// "D" for scores 60-69, and "F" for scores below 60.
function calculateGrade (score){
    if (score>=90)
    {return 'A';}
    else if (score>=80)
    {return 'B';}
    else if (score>=70)
    {return 'C';}
    else if (score>=60)
    {return 'D';}
    else(score<60)
    {return 'F';}
}
let score = 97
console.log(calculateGrade(score));

// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is
// even, and "Odd" if the number is odd.
function evenOrOdd (i) {
    if (i%2==0) 
    {return 'Even';}
    else if (i%2!=0) 
    {return 'Odd';}
}
let i = 4
console.log(evenOrOdd(i));

//  13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the
// age is between 18 and 65 (inclusive), and "Not allowed" otherwise.
function checkAge (age) {
    if (age>18 && age<65) 
    {return 'Allowed';}
    else 
    {return 'Not allowed';}
}
let age = 17;
console.log(checkAge(age));

// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether
// they have a student ID (true or false). If the person is under 18 or a student, they get a discount.
// If both conditions are met, return "Discounted price," otherwise return "Regular price."
function calculateTicketPrice (s,q) {
    if (s<18 && q==false)
     {return 'they get a discount';}
     else if (s<18 && q==true)
      {return 'Discounted price';}
else {return 'Regular price';}
}
let s=17 ;
let q=true;
console.log(calculateTicketPrice(s,q));

// 15)Username Validation
// Write a function validateUsername that takes a username as input. The function should return
// "Valid" if the username has at least 6 characters and contains only letters and numbers.
// Otherwise, return "Invalid."
function validateUsername (name) {
    if (name.length<=6) 
    {return 'Valid';}
    else {return 'Invalid';}
}
let name="divya's";
console.log(validateUsername(name));

// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the
// color is available (true or false). If the color is available and the choice is "blue" or "green,"
// return "Selected." If the choice is "red," return "Not available." For any other choice, return
// "Invalid choice."
function selectColor(color,isAvailable) {
   if (isAvailable) {
    if (color==="blue" || color==="green")
    {return 'Selected';}
   }
   else if (color==="red")
    {return 'Not available';}
    else {return 'Invalid choice';}
}
let color,isAvailable="red";
console.log(selectColor(color,isAvailable));

// 17) Adding and Removing Elements
// Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array methods, perform the following actions:
// - Add "orange" to the end of the array.
// - Remove the last element from the array.
// - Add "grape" to the beginning of the array.
// - Remove the first element from the array.

// Print the final array after each step.
const fruits = ["apple","banana"];
 fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);

// 18)Stack Operations
// Implement a stack using an array. Create a stack called `myStack` and perform the following operations:
// - Push the values 10, 20, and 30 onto the stack.
// - Pop the top element from the stack.
// - Push the value 40 onto the stack.

// Print the stack after each operation.
myStack = [];
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.push(40);
console.log(myStack);

// 19)Queue Operations
// Implement a queue using an array. Create a queue called `myQueue` and perform the following operations:
// - Enqueue the values "a", "b", and "c" into the queue.
// - Dequeue an element from the queue.
// - Enqueue the value "d" into the queue.

// Print the queue after each operation.

myQueue = [];
myQueue.push("a");
myQueue.push("b");
myQueue.push("c");
console.log(myQueue);
myQueue.shift();
console.log(myQueue);
myQueue.push("d");
console.log(myQueue);

// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the list.

// Print the shopping list after each operation.
shoppingList = [];
shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("vegetables");
console.log(shoppingList);
shoppingList.splice(shoppingList.indexOf("bread"),1);
console.log(shoppingList);
