// input :"my name is rakesh kumar"

const str = "my name is rakesh kumar";
const array = str.split(" ");
console.log(array);
for (let i = 0;i<array.length;i++) {
    array [i] = array[i].charAt(0).toUpperCase()+array[i].slice(1);
}
const str2 = array.join(" ");
console.log(str2); // output1:"My Name Is Rakesh Kumar"

let str3 = str2.split("Is");
console.log(str3);
let hidestr4 = str3[0].slice(0,2)+ " " +str3[0].charAt(3).toLowerCase()+str3[0].slice(4)
console.log(hidestr4);
let str5 = hidestr4 +'........'+ str3[1];
console.log(str5);  // output2:"My name...…..Rakesh Kumar"

let name2 = str5.replace("Rakesh Kumar","Suman");
console.log(name2);
let name3 =name2.replace("........","is")
console.log(name3) // output3 :"My name is Suman"





  