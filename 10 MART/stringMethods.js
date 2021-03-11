/* String Methods and Properties */

//Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

console.log(sln) // 26

// indexOf

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("way");

console.log(pos)

//lastIndexOf

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("occurs");

console.log(pos)

/* Both indexOf(), and lastIndexOf() return -1 if the text is not found. */ 

// search()

var str = "Please locate where 'locate' occurs!";
var pos = str.search("burak");

console.log(pos)

/* extracting
slice(start, end)
substring(start, end)
substr(start, length)
*/

//slice()

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // 7, 8, 9, 10, 11, 12
var res1 = str.slice(-12, -6)
var res2 = str.slice(7);

console.log(res)
console.log(res1)
console.log(res2)

//substring()

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

console.log(res)

//substr()

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 5);

console.log(res)

// replace()

str = "Please visit Microsoft!";
var n = str.replace("sit", "set");

console.log(n)

//toUpperCase()

var text1 = "hello world!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

console.log(text2)

//toLowerCase()

var text1 = "HELLO world!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to LOWER

console.log(text2)

//concat()

var text1 = "Hello";
var text2 = "nice";
var text4 = "world"
var text3 = text1.concat(" ", text2, " ", text4);

console.log(text3)

// trim()

var str = "  Hello World!      ";
var txt = str.trim();

console.log(str)
console.log(txt)

/*
extracting string character
charAt(position)
charCodeAt(position)
Property access [ ]
*/

//charAt()

var str = "HELLO WORLD";
var txt = str.charAt(5);            // returns H

console.log(txt)

// charCodeAt()

var str = "HELLO wORLD";
var txt = str.charCodeAt(6);            //

console.log(txt)

// property access

var str = "HELLO WORLD";
var txt = str[18];                   // returns H

console.log(txt)

// split()

var txt = "a,b,c,|,d,e";   // String
var res1 = txt.split(",");          // Split on commas
var res2 = txt.split("");          // Split on spaces
 var res3 = txt.split("|");          // Split on pipe

 console.log(res1)
 console.log(res2)
 console.log(res3)
