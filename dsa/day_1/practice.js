 let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray)

const data = "my name is Divya";
console.log(data.split(" "));

let email = 'basanidivya2@gmail.com'; //basani......@gmail.com
let splitEmail = email.split("@");

console.log(splitEmail);

let hideEmail = splitEmail[0].slice(0,6) + '......@' + splitEmail[1];
console.log(hideEmail);