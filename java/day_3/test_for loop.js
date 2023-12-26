const mobi = "9030841291";
const first4digit = mobi.slice(4,5);
console.log(first4digit);
const last4digit = mobi.slice(5,6);
console.log(last4digit);
const hidemobi = first4digit.padStart(5,"*") + last4digit.padEnd(5,"*");
console.log(hidemobi);
//1.

let text1="";
for(let i=5; i>0; i--) {
 text1 += i;

console.log('output in loop',text1);
}
console.log('output2',text1);

//2.

for(let i=5; i>0; i--) 
{   
    let text="";
 for (let j=i; j>0; j--) { 
   text += j;
}
console.log('in loop',text);
}
//3.

for (let j=9; j<20; j++) {
     text="";
     for (let i=j; i<20; i++){
        text+=i;
     }
     console.log('in loop',text);
}
console.log('output',text)
