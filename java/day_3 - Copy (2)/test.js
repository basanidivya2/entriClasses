const mobi = "9030841291";
const first4digit = mobi.slice(4,5);
console.log(first4digit);
const last4digit = mobi.slice(5,6);
console.log(last4digit);
const hidemobi = first4digit.padStart(5,"*")+last4digit.padEnd(5,"*")
console.log(hidemobi);


let text1=" ";
for(let i=0; i<=9; i++) {
 text1 += i;

console.log('output loop',text1);
}
console.log('output',text1);


let text=" ";
for(let i=5; i>0; i--) {
    
    for (let j=i;j>0;j--) {
       
        text+=j;        
}
console.log("output text", text);
}