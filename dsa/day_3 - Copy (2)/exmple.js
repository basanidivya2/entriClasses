//1Q.Divya replace with Srividya given string
let string1 = "Divya father name is Ramulu & Divya mother name is Ramadevi"
console.log (string1);
let name1 = string1.replaceAll('Divya','Srividya')
console.log(name1); 

//2Q.in above string count vowels
let string = "Divya father name is Ramulu & Divya mother name is Ramadevi"
console.log(string);
for (i=0;i<string.length;i++) {
    if (string.charAt(i) == 'a' || 
    string.charAt(i) == 'e' ||
    string.charAt(i) == 'i' || 
    string.charAt(i) == 'o' ||
    string.charAt(i) == 'u') {

   string ++; }
}

